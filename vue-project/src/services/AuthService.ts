import api from '@/axios-config';

interface LoginResponse {
  token: string;
}

const AuthService = {
  async login(email: string, password: string): Promise<void> {
    try {
      await api.get('/sanctum/csrf-cookie');
      const response = await api.post<LoginResponse>('/login', {
        email,
        password
      });

      const token = response.data.token;
      localStorage.setItem('token', token);
    } catch (error) {
      throw new Error('Failed to login. Please check your credentials and try again.');
    }
  }
};

export default AuthService;
