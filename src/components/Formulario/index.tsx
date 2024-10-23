import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { cadastrar } from '../../store/reducers/contatos'
import { MainContainer, Titulo } from '../../styles'
import * as S from './styles'
import * as enums from '../../utils/enum/Contato'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [importancia, setImportancia] = useState(enums.Importancia.OUTROS)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        importancia,
        status: enums.Status.NORMAL,
        tel,
        email
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <S.TelaForm>
        <Titulo>Novo Contato</Titulo>
        <S.Form onSubmit={cadastrarContato}>
          <S.Campo
            value={titulo}
            onChange={(evento) => setTitulo(evento.target.value)}
            type="text"
            placeholder="Nome"
          />
          <S.Campo
            value={tel}
            onChange={({ target }) => setTel(target.value)}
            type="tel"
            placeholder="Telefone"
          />
          <S.Campo
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="E-mail"
          />
          <S.Opcoes>
            <p>Importancia</p>
            {Object.values(enums.Importancia).map((importancia) => (
              <S.Opcao key={importancia}>
                <input
                  value={importancia}
                  name="prioridade"
                  type="radio"
                  onChange={(evento) =>
                    setImportancia(
                      evento.target.value as enums.Importancia.OUTROS
                    )
                  }
                  id={importancia}
                  defaultChecked={importancia === enums.Importancia.OUTROS}
                />{' '}
                <label htmlFor={importancia}>{importancia}</label>
              </S.Opcao>
            ))}
          </S.Opcoes>
          <S.Botao type="submit">Cadastrar</S.Botao>
        </S.Form>
      </S.TelaForm>
    </MainContainer>
  )
}

export default Formulario
