import { MigrationInterface, QueryRunner } from 'typeorm';

export class CARequestUserIdNotNullable1620322532858 implements MigrationInterface {
  name = 'CARequestUserIdNotNullable1620322532858';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "request" ALTER COLUMN "userId" SET NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "request" ALTER COLUMN "userId" DROP NOT NULL`);
  }
}
