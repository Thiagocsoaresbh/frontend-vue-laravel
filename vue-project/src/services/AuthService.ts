import axios from 'axios';

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData extends LoginData {
  username: string;
}

interface AuthResponse {
  access_token: string;
  token_type: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

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
}

export default new AuthService();
