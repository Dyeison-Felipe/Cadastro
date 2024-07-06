import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAddressTable1719861091974 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'address',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment'
          },
          {
            name: 'cep',
            type: 'varchar',
            length:'9',
            isNullable: false
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: false,
            length: '100'
          },
          {
            name: 'street',
            type: 'varchar',
            length: '100',
            isNullable: false
          },
          {
            name: 'number',
            type: 'int',
            isNullable: false
          },
          {
            name: 'complement',
            type: 'varchar',
            length: '100',
            isNullable: false
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('address')
  }

}
