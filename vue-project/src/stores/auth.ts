import { defineStore } from 'pinia';
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

