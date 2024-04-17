import styled from "styled-components"

export const HeaderStyled = styled.header`
  background-color: black;
  display: flex;
`

export const Menu = styled.div`
  line-height: 60px;
  display: flex;
  margin-left: auto;
  padding: 0 20px;
  a {
    color: white;
    padding: 0 10px;
    text-decoration: none;
    &:hover {
      color: orange;
    }
  }
`
