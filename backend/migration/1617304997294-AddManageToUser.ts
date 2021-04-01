import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddManageToUser1617304997294 implements MigrationInterface {
  name = 'AddManageToUser1617304997294';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" ADD "manager" character varying`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "manager"`);
  }
}
