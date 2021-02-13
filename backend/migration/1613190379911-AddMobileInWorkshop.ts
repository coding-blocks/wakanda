import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddMobileInWorkshop1613190379911 implements MigrationInterface {
  name = 'AddMobileInWorkshop1613190379911';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "workshop" ADD "mobile" character varying`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "workshop" DROP COLUMN "mobile"`);
  }
}
