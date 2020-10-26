import Layout from "components/Layout"
import styled from "styled-components"
const ImgContact = styled.img`
  width: clamp(15em, 30vw, 30em);
  margin: 2em auto;
`

export default function Contact() {
  return (
    <Layout title="CAFE HOUSE | Contact">
      <h2>contact</h2>
      <ImgContact src="static/contact.png" alt="img" />
    </Layout>
  )
}
