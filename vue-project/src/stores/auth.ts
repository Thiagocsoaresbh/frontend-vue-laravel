import { defineStore } from 'pinia';
import AuthService from '@/services/AuthService';
import type { LoginData, RegisterData, } from '@/types/types';
import type { User } from '@/types/types'; 

interface UserState {
  user: User | null; //Using the User interface
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
        if (data && data.user) { // Certifying that data.user exists
          this.user = data.user; // Assuming that data.user is the user object now 
          localStorage.setItem('access_token', data.access_token);
          AuthService.setAuthToken(data.access_token);
        }
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    },
    async registerUser(registerData: RegisterData) {
      try {
        await AuthService.register(registerData);
      } catch (error) {
        console.error('Register error:', error);
        throw error;
      }
    },
    logoutUser() {
      AuthService.logout();
      this.user = null;
      localStorage.removeItem('access_token');
      AuthService.clearAuthToken();
    },
  },
});
