export type UserToken = {
  refreshToken?: string;
  accessToken?: string;
};

export type Ebook = {
  id: number;
  title: string;
  slug: string;
  image: string;
  author: string;
  price: number;
  description: string;
};

export type EbookCart = {
  id: number;
  title: string;
  slug: string;
  image: string;
  price: number;
  quantity: number;
};

export type EbooksTypeAPI = {
  EbookID: number;
  Title: string;
  Slug: string;
  Image: string;
  Author: string;
  Price: number;
  Description: string;
}