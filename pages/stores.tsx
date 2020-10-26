import Layout from "components/Layout"
import { inventory } from "pages/api/Data"
import { useRecoilState } from "recoil"
import { cartState } from "components/Recoil/cartAtoms"
import { ItemsGrid } from "styles/itemsGrid"

export default function Stores() {
  const [cart, setCart] = useRecoilState<any>(cartState)
  return (
    <Layout title="CAFE HOUSE | Stores">
      <h2>Available Items</h2>
      <ItemsGrid>
        {Object.entries(inventory).map(([id, { name, price, img }]) => (
          <li key={id}>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <div>
              <p className="price">
                <span>$</span>
                {price.toFixed(2)}
              </p>
              <button
                className="success"
                onClick={() => {
                  setCart({ ...cart, [id]: (cart[id] || 0) + 1 })
                }}
              >
                Add To Cart
              </button>
            </div>
          </li>
        ))}
      </ItemsGrid>
    </Layout>
  )
}
