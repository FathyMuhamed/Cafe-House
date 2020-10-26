import Link from "next/link"
import styled from "styled-components"
const NavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  align-items: center;
  /* width: 70%; */
  text-align: center;
  margin: 1em auto;
  border-bottom: 2px solid var(--secondColor);
  padding-bottom: 10px;
  font-size: clamp(0.8em,3.5vw,1.2em);
  h2 {
    background-color: var(--secondColor);
    color: var(--backgroundColor);
    border-radius: 50%;
    width: 75px;
    height: 75px;
    line-height: 27px;
    padding: 9px 8px;
    flex: 0 1 75px;
    a {
      color: var(--backgroundColor);
    }
  }
  a {
    /* flex: 1 1 50px; */
    flex: 0 1 35px;
    /* font-size: 1.2em; */

  }
`

export function Nav() {
  return (
    <NavBar>
      <Link href="/">HOME</Link>
      <Link href="/stores">STORES</Link>
      <h2 className="logo">
        <Link href="/">CAFE HOUSE </Link>
      </h2>
      <Link href="/cart">CART</Link>
      <Link href="/contact">CONTACT</Link>
    </NavBar>
  )
}
