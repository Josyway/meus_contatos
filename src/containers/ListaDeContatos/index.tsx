import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'

import { RootReducer } from '../../store'
import { MainContainer } from '../../styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContato = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'importancia') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.importancia === valor
        )
      } else if (criterio === 'status') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.status === valor
        )
      }

      return contatosFiltrados
    } else {
      return itens
    }
  }

  return (
    <MainContainer>
      {filtraContato().map((c) => (
        <li key={c.titulo}>
          <Contato
            id={c.id}
            titulo={c.titulo}
            importancia={c.importancia}
            status={c.status}
            tel={c.tel}
            email={c.email}
          />
        </li>
      ))}
    </MainContainer>
  )
}

export default ListaDeContatos
