import { MigrationInterface, QueryRunner } from 'typeorm';

export class ShiftStatusFromTaskToSubmission1611567373846 implements MigrationInterface {
  name = 'ShiftStatusFromTaskToSubmission1611567373846';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "status"`);
    await queryRunner.query(`DROP TYPE "public"."task_status_enum"`);
    await queryRunner.query(
      `CREATE TYPE "submission_status_enum" AS ENUM('scheduled', 'progress', 'review', 'completed')`,
    );
    await queryRunner.query(
      `ALTER TABLE "submission" ADD "status" "submission_status_enum" NOT NULL DEFAULT 'scheduled'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "submission" DROP COLUMN "status"`);
    await queryRunner.query(`DROP TYPE "submission_status_enum"`);
    await queryRunner.query(
      `CREATE TYPE "public"."task_status_enum" AS ENUM('scheduled', 'progress', 'review', 'completed')`,
    );
    await queryRunner.query(
      `ALTER TABLE "task" ADD "status" "task_status_enum" NOT NULL DEFAULT 'scheduled'`,
    );
  }
}
