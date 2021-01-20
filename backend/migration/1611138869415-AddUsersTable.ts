import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUsersTable1611138869415 implements MigrationInterface {
  name = 'AddUsersTable1611138869415';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "oneauth_id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying, "username" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
