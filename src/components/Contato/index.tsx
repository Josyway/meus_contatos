import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enum/Contato'
import { remover, editar, alteraStatus } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Tarefas'

export type Props = ContatoClass

const Contato = ({
  titulo,
  importancia,
  status,
  tel: telOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (telOriginal.length > 0) {
      setTel(telOriginal)
    }
  }, [telOriginal]),
    useEffect(() => {
      if (emailOriginal.length > 0) {
        setEmail(emailOriginal)
      }
    }, [emailOriginal])

  function cancelarEditar() {
    setEditando(false), setTel(telOriginal), setEmail(emailOriginal)
  }

  function alteraStatusContato(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(alteraStatus({ id, favoritar: evento.target.checked }))
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.FAVORITO}
          onChange={alteraStatusContato}
        />
        <S.Titulo>
          {editando && <em>Editando:</em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametro="importancia" importacia={importancia}>
        {importancia}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Contato
        disabled={!editando}
        value={tel}
        onChange={(evento) => setTel(evento.target.value)}
      >
        {tel}
      </S.Contato>
      <S.Contato
        disabled={!editando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      >
        {email}
      </S.Contato>
      <S.BarraAcao>
        {editando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    importancia,
                    status,
                    tel,
                    email,
                    id
                  })
                )
                setEditando(false)
              }}
            >
              salvar
            </S.BotaoSalvar>
            <S.BotaoCacelarRemover onClick={cancelarEditar}>
              Cancelar
            </S.BotaoCacelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEditando(true)}>Editar</S.Botao>
            <S.BotaoCacelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCacelarRemover>
          </>
        )}
      </S.BarraAcao>
    </S.Card>
  )
}
export default Contato
