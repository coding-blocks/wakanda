import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCARequests1613812953684 implements MigrationInterface {
  name = 'AddCARequests1613812953684';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "request" ("id" SERIAL NOT NULL, "namee" character varying NOT NULL, "number" character varying NOT NULL, "email" character varying NOT NULL, "college" character varying NOT NULL, "city" character varying NOT NULL, "branch" character varying NOT NULL, "graduationYear" character varying NOT NULL, "fbLink" character varying NOT NULL, "profiles" text NOT NULL, "criteria" text NOT NULL, "uniqueIdea" text NOT NULL, "additionalInfo" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "REL_38554ade327a061ba620eee948" UNIQUE ("userId"), CONSTRAINT "PK_167d324701e6867f189aed52e18" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "request" ADD CONSTRAINT "FK_38554ade327a061ba620eee948b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "request" DROP CONSTRAINT "FK_38554ade327a061ba620eee948b"`,
    );
    await queryRunner.query(`DROP TABLE "request"`);
  }
}
