import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Roboto, sans-serif;
}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;

  @media (max-width: 768px) {
    grid-template-columns: 100px auto;
  }
`
export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  grid-gap: 16px;
  width: 98%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 50px;
  }
`
export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 32px;
  font-size: 18px;
  font-weight: bold;
`

export default EstiloGlobal
