export type Products={
    id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[]; 
}

export type SearchData = {
    text?: string
  };
  export type ResponseData = {
    products: Products[];
    total: number;
    skip: number;
    limit: number;
  };
export type GridDisp = {
    image: {
      src: string,
      alt: string,
      link: string
    },
    title:string,
    desc: string,
    price:string,
    id:number
  }
