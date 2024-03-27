import { iPost } from "./post";

export interface iContentJson {
  posts:iPost[]
  total:number
  skip:number
  limit:number
}
