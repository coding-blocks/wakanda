import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixNameSpelling1613896105556 implements MigrationInterface {
  name = 'FixNameSpelling1613896105556';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "request" RENAME COLUMN "namee" TO "name"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "request" RENAME COLUMN "name" TO "namee"`);
  }
}
