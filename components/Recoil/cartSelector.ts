import { inventory } from "pages/api/Data"
import { selector } from "recoil"
import { cartState } from "./cartAtoms"

export const totalState = selector({
    key: "totalState",
    get: ({ get }) => {
      const cart = get(cartState)
      const total = Object.entries(cart).reduce(
        (acc, [id, quantity]: any) => acc + inventory[id].price * quantity,
        0
      )

      return total
    },
  })