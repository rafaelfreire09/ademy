import { Axios } from './axios';
import { EbooksTypeAPI } from 'types/types';

export async function GetEbooksPurchased(userId: number): Promise<EbooksTypeAPI[] | null> {
  try {
    const request = await Axios.get(`/users/getEbooksPurchased/${userId}`);

    return request.data;
  } catch (error) {
    return null;
  }
}

export async function PaymentEbook(userId: number, ebookId: number) {
  try {
    const request = await Axios.put(`/users/addEbook/${userId}`, {
      EbookId: ebookId
    });

    return request.data;
  } catch (error) {
    return null;
  }
}