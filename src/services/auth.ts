import { Axios } from './axios';

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await Axios.post('/auth', {
      Email: email,
      Password: password,
    });

    return request.data;
  } catch (error) {
    return null;
  }
}

export async function CreateUser(name: string, email: string, password: string) {
  try {
    const request = await Axios.post('/users', {
      Name: name,
      Email: email,
      Password: password,
    });

    return request.data;
  } catch (error) {
    return null;
  }
}
