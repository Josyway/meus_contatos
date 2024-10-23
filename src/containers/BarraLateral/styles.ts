import { styled } from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
  margin: 0;
`
export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const Campo = styled.input`
  border-radius: 8px;
  padding: 8px;
  color: #666666;
  border-color: #666666;
  background-color: #fff;
  font-weight: bold;
  width: 100%;
`
export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinza};
  border-radius: 8px;
  margin-right: 8px;
`
