import Head from "next/head"
import styled from "styled-components"
import { Nav } from "./Nav"

export const Container = styled.div`
  margin: auto;
  max-width: 70vw;
  text-align: center;
  footer {
    background-image: linear-gradient(
      180deg,
      transparent 60%,
      var(--secondColor) 0
    );
    background-position: 3px bottom;
    background-repeat: no-repeat;
    display: inline-block;
    -webkit-transform: rotate(-2deg) scale(1.1);
    -ms-transform: rotate(-2deg) scale(1.1);
    transform: rotate(-2deg) scale(1.1);
    color: var(--mainColor);
    margin: 1em auto ;
  }
  main {
    min-height: 70vh;
  }
`

interface layoutProps {
  children: any
  title?: string
}

export default function Layout({
  children,
  title = "Title page",
}: layoutProps) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="static/icon3.jpg" />
        <meta name="description" content="Cafe House website using Next.js" />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{title}</title>
      </Head>
      <Nav />
      <main>{children}</main>
      <footer>
        <h4>
          CopyRight @
          <a
            href="https://twitter.com/Pxuee"
            target="_blank"
            title="Twitter"
            rel="noreferrer noopener"
          >
            pxuee
          </a>
        </h4>
      </footer>
    </Container>
  )
}
