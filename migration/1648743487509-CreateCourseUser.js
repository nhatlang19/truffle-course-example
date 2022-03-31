const { MigrationInterface, QueryRunner, Table } = require("typeorm");

module.exports = class CreateCourseUser1648743487509 {

    table = new Table({
        name: 'course_users',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true, // Auto-increment
            generationStrategy: 'increment',
          },
          {
            name: 'price',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'course_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'address_user',
            type: 'varchar',
            length: '255',
            isNullable: false,
          }
        ],
    });

    async up(queryRunner) {
        await queryRunner.createTable(this.table);
    }

    async down(queryRunner) {
        await queryRunner.dropTable(this.table);
    }


}
