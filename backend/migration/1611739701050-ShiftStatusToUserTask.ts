import { MigrationInterface, QueryRunner } from 'typeorm';

export class ShiftStatusToUserTask1611739701050 implements MigrationInterface {
  name = 'ShiftStatusToUserTask1611739701050';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user_task" RENAME COLUMN "description" TO "status"`);
    await queryRunner.query(`ALTER TABLE "submission" DROP COLUMN "status"`);
    await queryRunner.query(`DROP TYPE "public"."submission_status_enum"`);
    await queryRunner.query(`ALTER TABLE "user_task" DROP COLUMN "status"`);
    await queryRunner.query(
      `CREATE TYPE "user_task_status_enum" AS ENUM('draft', 'review', 'accepted', 'rejected')`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_task" ADD "status" "user_task_status_enum" NOT NULL DEFAULT 'draft'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user_task" DROP COLUMN "status"`);
    await queryRunner.query(`DROP TYPE "user_task_status_enum"`);
    await queryRunner.query(`ALTER TABLE "user_task" ADD "status" character varying NOT NULL`);
    await queryRunner.query(
      `CREATE TYPE "public"."submission_status_enum" AS ENUM('scheduled', 'progress', 'review', 'completed')`,
    );
    await queryRunner.query(
      `ALTER TABLE "submission" ADD "status" "submission_status_enum" NOT NULL DEFAULT 'scheduled'`,
    );
    await queryRunner.query(`ALTER TABLE "user_task" RENAME COLUMN "status" TO "description"`);
  }
}
