import axios from 'axios';

interface LoginResponse {
  token: string;
}

const AuthService = {
  async login(username: string, password: string): Promise<string> {
    try {
      const response = await axios.post<LoginResponse>('https://bank-test-3c74d9b539e4.herokuapp.com/login', {
        username: username,
        password: password
      });
      
      const token = response.data.token;
      
      localStorage.setItem('token', token);
      
      return token;
    } catch (error) {
      throw new Error('Failed to login. Please check your credentials and try again.');
    }
  }
};

export default AuthService;
