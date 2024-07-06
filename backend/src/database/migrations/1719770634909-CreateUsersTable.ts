import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1719770634909 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> { // fazer alguma modificação
    await queryRunner.createTable(
      new Table({
        name: 'users', // nome da tabela
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment'
          },
          {
            name: 'name',
            type: 'varchar',
            length: '100',
            isNullable: false,

          },
          {
            name: 'email',
            type: 'varchar',
            length: '170',
            isNullable: false,
          },
          {
            name: 'cpf',
            type: 'varchar',
            length: '14',
            isNullable: false,
          },
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> { // desfazer alguma modificação
    await queryRunner.dropTable('users')
  }

}
