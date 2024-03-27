import { iProduct } from "./i-product"

export interface iContentJson {
  products: iProduct[]
  total: number
  skip: number
  limit: number
}
