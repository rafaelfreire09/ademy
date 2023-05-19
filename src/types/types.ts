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
