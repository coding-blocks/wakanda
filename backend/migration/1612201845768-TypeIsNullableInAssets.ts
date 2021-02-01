import { MigrationInterface, QueryRunner } from 'typeorm';

export class TypeIsNullableInAssets1612201845768 implements MigrationInterface {
  name = 'TypeIsNullableInAssets1612201845768';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "submission_asset" ALTER COLUMN "type" DROP NOT NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "submission_asset"."type" IS NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`COMMENT ON COLUMN "submission_asset"."type" IS NULL`);
    await queryRunner.query(`ALTER TABLE "submission_asset" ALTER COLUMN "type" SET NOT NULL`);
  }
}
