import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import User from "./User";

@Entity('address')
class Address {
  @PrimaryGeneratedColumn('increment')
  id?: number

  @Column('varchar', {length: 9, nullable:false})
  cep: string

  @Column('varchar', { length: 100, nullable: false})
  city: string

  @Column('varchar', {length: 100, nullable: false})
  street: string

  @Column('int')
  number: number

  @Column('varchar', { length: 100,nullable: false})
  complement: string

  @OneToOne(()=> User, (user) => user.address)
  user?: User
}

export default Address