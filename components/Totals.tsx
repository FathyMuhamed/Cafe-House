import { useRecoilValue } from "recoil"
import styled from "styled-components"
import { totalState } from "./Recoil/cartSelector"
const ShowTotal = styled.h2`
  /* position: absolute; */
  margin-bottom: 1em;
  background-image: linear-gradient(
    180deg,
    transparent 60%,
    var(--secondColor) 0
  );
  background-position: 3px bottom;
  background-repeat: no-repeat;
  display: inline-block;
  transform: rotate(-2deg) scale(1.1);
`

export function Totals() {
  const total = useRecoilValue(totalState)
  if (Array(total).length === 0) return null
  return <ShowTotal>Totals {total.toFixed(2)}</ShowTotal>
}
