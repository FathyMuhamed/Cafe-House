import Layout from "components/Layout"
import { CartItem } from "components/CartItem"
import { Totals } from "components/Totals"
export default function Cart() {
  return (
    <Layout title="CAFE HOUSE | Card">
      <Totals />
      <CartItem />
    </Layout>
  )
}
