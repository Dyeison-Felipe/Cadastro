import {Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne} from 'typeorm'
import Address from './Address'
import IUser from '../interfaces/IUser'

@Entity('users') // passa o nome da tabela que tem no banco de dados
class User {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column('varchar', { length: 100, nullable: false })
  name: string

  @Column('varchar', { length: 170, nullable: false })
  email: string

  @Column('varchar', { length: 14, nullable: false })
  cpf: string

  @OneToOne(()=> Address, (user) => user.user, {cascade: true})
  @JoinColumn()
  address:Address

  constructor(props: IUser) {
    this.name = props?.name
    this.email = props?.email
    this.cpf = props?.cpf
    this.address = props?.address
  }

}

export default User