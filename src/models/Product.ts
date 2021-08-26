import * as Yup from 'yup';

export type Product = {
  id: string
  name: string
  description: string
  image: string
  price: number
  favorite: boolean
  ingredients: string[]
};
export interface IProductProduct {
  product: IProducts
}

export interface IProducts {
  __typename: "Products"
  id: string
  name: string
  description: string
  image: string
  price: number
  favorite: boolean
  ingredients: string[]
}

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
});
