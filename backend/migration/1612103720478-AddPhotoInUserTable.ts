import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPhotoInUserTable1612103720478 implements MigrationInterface {
  name = 'AddPhotoInUserTable1612103720478';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "photo" character varying NOT NULL DEFAULT 'https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "photo"`);
  }
}
