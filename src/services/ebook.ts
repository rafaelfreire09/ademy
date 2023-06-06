import { EbooksTypeAPI } from 'types/types';
import { Axios } from './axios';

export async function GetFeaturedEbooks(): Promise<EbooksTypeAPI[] | null> {
  try {
    const request = await Axios.get('/ebooks');

    return request.data;
  } catch (error) {
    return null;
  }
}

export async function GetEbookInfoBySLug(ebookSlug: string): Promise<EbooksTypeAPI | null> {
  try {
    const request = await Axios.get(`/ebooks/bySlug/${ebookSlug}`);

    return request.data;
  } catch (error) {
    return null;
  }
}