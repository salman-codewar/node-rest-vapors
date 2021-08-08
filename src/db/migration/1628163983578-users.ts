import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class users1628163983578 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'first_name',
            type: 'varchar'
          },
          {
            name: 'last_name',
            type: 'varchar'
          },
          {
            name: 'email',
            type: 'varchar'
          },
          {
            name: 'gender',
            type: 'varchar'
          },
          {
            name: 'user_type',
            type: 'varchar'
          },
          {
            name: 'password',
            type: 'varchar'
          },
          {
            name: 'confirmed',
            type: 'boolean',
            default: false
          },
          {
            name: 'is_password_reset',
            type: 'boolean',
            default: false
          },
          {
            name: 'otp',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'expiry',
            type: 'timestamp',
            isNullable: true
          },
          {
            name: 'access_token',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'refresh_token',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      }),
      true
    );

    await queryRunner.createIndex(
      'users',
      new TableIndex({
        name: 'IDX_REFRESH_TOKEN',
        columnNames: ['refresh_token']
      })
    );

    await queryRunner.createIndex(
      'users',
      new TableIndex({
        name: 'IDX_EMAIL',
        columnNames: ['email']
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
