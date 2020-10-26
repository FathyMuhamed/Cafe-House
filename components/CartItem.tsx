import { ItemsGrid, QuantityItem, NoItems } from "styles/itemsGrid"
import { inventory } from "pages/api/Data"
import { useRecoilState, useRecoilValue } from "recoil"
import { cartState } from "./Recoil/cartAtoms"

export function CartItem() {
  const cartItem = useRecoilValue(cartState)
  const [cart, setCart] = useRecoilState<any>(cartState)
  if (Object.keys(cartItem).length === 0) return <NoItems>No items 😔</NoItems>
  return (
    <div>
      <h2>Card Item</h2>
      <ItemsGrid>
        {Object.entries(cartItem).map(([id, quantity]: any) => (
          <li key={id}>
            <img src={inventory[id].img} alt="" />
            <h3>
              {inventory[id].name}
              <QuantityItem>{quantity}</QuantityItem>
            </h3>
            <div>
              <p className="price">
                <span> $</span>
                {inventory[id].price.toFixed(2)}
              </p>

              <span>
                {cart[id] && (
                  <button
                    className="fail"
                    onClick={() => {
                      const copy: any = { ...cart }
                      if (copy[id] === 1) {
                        delete copy[id]
                        setCart(copy)
                      } else {
                        setCart({ ...copy, [id]: copy[id] - 1 })
                      }
                    }}
                  >
                    remove
                  </button>
                )}
              </span>
            </div>
          </li>
        ))}
      </ItemsGrid>
    </div>
  )
}
