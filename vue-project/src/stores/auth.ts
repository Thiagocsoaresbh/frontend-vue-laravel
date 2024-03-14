import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import AuthService from '@/services/AuthService';
import type { LoginData, RegisterData, AuthResponse } from '@/types/types';

interface UserState {
  user: AuthResponse['user'] | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): UserState => ({
    user: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
  actions: {
    async loginUser(loginData: LoginData) {
      try {
        const data = await AuthService.login(loginData);
        if (data) {
          this.user = data.user;
          // Saving the access token in the localStorage
          localStorage.setItem('access_token', data.access_token);
          // Defining the access token in the Axios headers
          AuthService.setAuthToken(data.access_token);
          // Redirecting to the Home page
          const router = useRouter();
          router.push({ name: 'Home' });
        }
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    },
    async registerUser(registerData: RegisterData) {
      try {
        await AuthService.register(registerData);
        // After registering, redirect to the Login page
        const router = useRouter();
        router.push({ name: 'Login' });
      } catch (error) {
        console.error('Register error:', error);
        throw error;
      }
    },
    logoutUser() {
      AuthService.logout();
      this.user = null;
      // Removing the access token from the localStorage
      localStorage.removeItem('access_token');
      // Clearing the access token from the Axios headers
      AuthService.clearAuthToken();
      // Redirecting to the Login page
      const router = useRouter();
      router.push({ name: 'Login' });
    },
  },
});
