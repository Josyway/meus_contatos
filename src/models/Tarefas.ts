import * as enums from '../utils/enum/Contato'

class Contato {
  titulo: string
  importancia: enums.Importancia
  status: enums.Status
  tel: string
  email: string
  id: number

  constructor(
    titulo: string,
    importancia: enums.Importancia,
    status: enums.Status,
    tel: string,
    email: string,
    id: number
  ) {
    this.titulo = titulo
    this.importancia = importancia
    this.status = status
    this.tel = tel
    this.email = email
    this.id = id
  }
}

export default Contato
