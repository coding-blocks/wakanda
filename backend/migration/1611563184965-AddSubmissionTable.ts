import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddSubmissionTable1611563184965 implements MigrationInterface {
  name = 'AddSubmissionTable1611563184965';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "submission" ("id" SERIAL NOT NULL, "description" text NOT NULL, "submittedAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_7faa571d0e4a7076e85890c9bd0" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "user_task" ADD "submissionId" integer`);
    await queryRunner.query(
      `ALTER TABLE "user_task" ADD CONSTRAINT "UQ_000460adbc9ebadb2b950910f16" UNIQUE ("submissionId")`,
    );
    await queryRunner.query(`COMMENT ON COLUMN "task"."startDate" IS NULL`);
    await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "startDate" DROP DEFAULT`);
    await queryRunner.query(`COMMENT ON COLUMN "task"."endDate" IS NULL`);
    await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "endDate" DROP DEFAULT`);
    await queryRunner.query(
      `ALTER TABLE "user_task" ADD CONSTRAINT "FK_000460adbc9ebadb2b950910f16" FOREIGN KEY ("submissionId") REFERENCES "submission"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_task" DROP CONSTRAINT "FK_000460adbc9ebadb2b950910f16"`,
    );
    await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "endDate" SET DEFAULT now()`);
    await queryRunner.query(`COMMENT ON COLUMN "task"."endDate" IS NULL`);
    await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "startDate" SET DEFAULT now()`);
    await queryRunner.query(`COMMENT ON COLUMN "task"."startDate" IS NULL`);
    await queryRunner.query(
      `ALTER TABLE "user_task" DROP CONSTRAINT "UQ_000460adbc9ebadb2b950910f16"`,
    );
    await queryRunner.query(`ALTER TABLE "user_task" DROP COLUMN "submissionId"`);
    await queryRunner.query(`DROP TABLE "submission"`);
  }
}
