import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroContato from '../../components/FiltroContato'
import * as S from './styles'
import * as enums from '../../utils/enum/Contato'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <S.Campo
              type="text"
              placeholder="Busca"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Card>
              <FiltroContato
                valor={enums.Importancia.FAMILIA}
                criterio="importancia"
                contador={0}
                legenda={'Família'}
              />
              <FiltroContato
                valor={enums.Importancia.OUTROS}
                criterio="importancia"
                contador={0}
                legenda={'Outros'}
              />
              <FiltroContato
                valor={enums.Importancia.COMERCIAL}
                criterio="importancia"
                contador={0}
                legenda={'Comerical'}
              />
              <FiltroContato
                valor={enums.Status.NORMAL}
                criterio="status"
                contador={0}
                legenda={'Normal'}
              />
              <FiltroContato
                valor={enums.Status.FAVORITO}
                criterio="status"
                contador={0}
                legenda={'Favorito'}
              />
              <FiltroContato
                criterio="todas"
                ativo
                contador={3}
                legenda={'Todos'}
              />
            </S.Card>
          </>
        ) : (
          <S.Botao type="button" onClick={() => navigate('/')}>
            Voltar lista de Contatos
          </S.Botao>
        )}
      </div>
    </S.Aside>
  )
}
export default BarraLateral
