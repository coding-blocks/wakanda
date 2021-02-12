import { MigrationInterface, QueryRunner } from 'typeorm';

export class MakePhotoNullable1613164977608 implements MigrationInterface {
  name = 'MakePhotoNullable1613164977608';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "photo" DROP NOT NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "user"."photo" IS NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`COMMENT ON COLUMN "user"."photo" IS NULL`);
    await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "photo" SET NOT NULL`);
  }
}
