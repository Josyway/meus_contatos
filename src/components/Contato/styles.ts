import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enum/Contato'

type TagProps = {
  importacia?: enums.Importancia
  status?: enums.Status
  parametro: 'status' | 'importancia'
}

function corDeFundo(props: TagProps): string {
  if (props.parametro === 'importancia') {
    if (props.importacia === enums.Importancia.FAMILIA)
      return variaveis.vermelho
    if (props.importacia === enums.Importancia.COMERCIAL)
      return variaveis.laranja
  } else {
    if (props.status === enums.Status.FAVORITO) return variaveis.amarelo
    if (props.status === enums.Status.NORMAL) return variaveis.verde
  }
  return '#1e90ff'
}

export const Card = styled.div`
  padding: 16px;
  display: block;
  border-radius: 8px;
  border: 1px solid red;
  margin: 16px;
  background-color: #eee;
  width: 100%;
  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`
export const Titulo = styled.h2`
  color: red;
  margin-left: 8px;
`

export const Contato = styled.textarea`
  margin-top: 8px;
  display: block;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  background-color: ${(props) => corDeFundo(props)};
  border-radius: 8px;
  margin-right: 8px;
  color: #fff;
`

export const BarraAcao = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
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
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCacelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
