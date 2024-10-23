import * as S from './styles'
import * as enums from '../../utils/enum/Contato'
import { useDispatch, useSelector } from 'react-redux'
import { alteraFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
  criterio: 'importancia' | 'status' | 'todas'
  valor?: enums.Importancia | enums.Status
}

const FiltroContato = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()

  const { filtro, contatos } = useSelector((state: RootReducer) => state)
  const cardAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarContatos = () => {
    if (criterio === 'todas') return contatos.itens.length
    if (criterio === 'importancia') {
      return contatos.itens.filter((item) => item.importancia === valor).length
    } else {
      return contatos.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contarContatos()
  const ativo = cardAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroContato
