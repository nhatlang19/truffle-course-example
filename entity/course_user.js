var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "CourseUser", 
    tableName: "course_users",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        price: {
            type: "int"
        },
        course_id: {
            type: "int"
        },
        address_user: {
            type: "varchar"
        }
    }
});
