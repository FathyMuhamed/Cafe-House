/// <reference types="next" />
/// <reference types="next/types/global" />

import { ImgHTMLAttributes } from "react"

type Tinventory = {
    name: string
    price: number
    img:ImgHTMLAttributes
  }
  type Item = {
    [id: string]: Tinventory
  }