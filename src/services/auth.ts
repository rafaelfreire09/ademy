import { Axios } from './axios';

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await Axios.post('/auth', {
      email,
      password,
    });

    return request.data;
  } catch (error) {
    return null;
  }
}
