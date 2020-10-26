import styled from "styled-components";

export const ItemsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  gap: 2em;
  li {
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    text-align: center;
    background-color: white;
    width: 190px;
    height: 200px;
    border-radius: 15px;
    img {
      width: 50px;
      object-fit:cover;
      height: 50px;
      border-radius: 50%;
      background-color: var(--backgroundColor);
      border: 2px solid var(--secondColor);
    }
    h3 {
      color: var(--mainColor);
      letter-spacing: 1.5px;
    }
    div {
      display: flex;
      align-items: center;
      font-size: 0.9em;
      .price {
        span {
          letter-spacing: 1.5px;
          font-size: 1.2em;
        }
        color: var(--mainColor);
        margin-right: 2.6em;
      }
      button {
        background: transparent;
        border: none;
        color: var(--mainColor);
        font-family: inherit;
        cursor: pointer;
        font-family: inherit;
        cursor: pointer;
        padding: 0.2em 0.6em;
        border-radius: 5px;
        transition:.4s all ease-out;
        &.success:hover {
          color: white;
          background-color: green;
        }
        &.fail:hover {
          color: white;
          background-color: red;
        }
      }
    }
  }
`

export const QuantityItem = styled.span`
position:absolute;
right: 0px;
top: -12px;
background-color: var(--secondColor);
width: 25px;
height: 25px;
border-radius: 50%;
color: var(--backgroundColor);
`;
export const NoItems = styled.p`
  font-size:2em;
  color:var(--mainColor)
`;