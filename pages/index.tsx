import Layout from "components/Layout"
import styled from "styled-components"
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1em;
  justify-content: center;
  align-items: center;
  height: 75vh;
  img {
    /* width: clamp(18em, 15vw, 25em); */
    width: clamp(15em, 30vw, 30em);
    margin: auto;
  }
  div {
    text-align: center;
    h2 {
      font-size: 4vw;
      font-size: 3em;
    }
    p {
      color: var(--mainColor);
      margin-bottom: 1.3em;
    }
  }
`
export default function App() {
  return (
    <Layout title="CAFE HOUSE | Home">
      <Grid>
        <img src="static/cafeHome.svg" alt="img" />
        <div>
          <h2>CAFE HOUSE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            ducimus facilis odio ut libero eo temporibus sed molestias, culpa
            accusantium perspiciatis harum.
          </p>
        </div>
      </Grid>
    </Layout>
  )
}
