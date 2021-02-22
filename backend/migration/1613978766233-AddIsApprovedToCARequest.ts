import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddIsApprovedToCARequest1613978766233 implements MigrationInterface {
  name = 'AddIsApprovedToCARequest1613978766233';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "request" ADD "isApproved" boolean NOT NULL DEFAULT false`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "request" DROP COLUMN "isApproved"`);
  }
}
