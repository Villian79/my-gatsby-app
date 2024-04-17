import styled from "styled-components"

export const PriceOptionsWrapper = styled.div`
  max-width: 960px;
  margin: 40px auto;
  display: flex;
  gap: 20px;
`

export const PriceOption = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  background-color: ${props => (props.isMostPopular ? "orange" : "#eee")};
  color: ${props => (props.isMostPopular ? "white" : "black")};
  display: inline-block;
  padding: 20px;
  position: relative;
`

export const MostPopularLabel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  background-color: limegreen;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`
