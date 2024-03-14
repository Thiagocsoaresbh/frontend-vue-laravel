import type { LoginData, RegisterData, AuthResponse } from '@/types/types';
import axios from '../axios-config';

class AuthService {
  async login(loginData: LoginData): Promise<AuthResponse | null> {
    try {
      const response = await axios.post<AuthResponse>('/login', loginData);
      if (response.data.access_token) {

        localStorage.setItem('access_token', response.data.access_token);

        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
        return response.data;
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
    return null;
  }

  async register(registerData: RegisterData): Promise<void> {
    try {
      await axios.post('/register', registerData);
      
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
  }

  logout(): void {
    localStorage.removeItem('access_token');
    delete axios.defaults.headers.common['Authorization'];
  }

  setAuthToken(token: string): void {
    localStorage.setItem('access_token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  clearAuthToken(): void {
    localStorage.removeItem('access_token');
    delete axios.defaults.headers.common['Authorization'];
  }
}

export default new AuthService();
