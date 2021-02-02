import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCollegeToUser1612192700845 implements MigrationInterface {
  name = 'AddCollegeToUser1612192700845';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" ADD "caCode" character varying`);
    await queryRunner.query(`ALTER TABLE "user" ADD "college" character varying`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "college"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "caCode"`);
  }
}
