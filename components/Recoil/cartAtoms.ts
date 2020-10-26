import { Item } from 'next-env'
import {atom} from 'recoil'

const initialState: Item = {}
export const cartState = atom({
  key: "cardState",
  default: initialState,
})