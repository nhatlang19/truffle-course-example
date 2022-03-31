var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Course", // Will use table name `category` as default behaviour.
    tableName: "courses", // Optional: Provide `tableName` property to override the default behaviour for table name. 
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        price: {
            type: "int"
        },
        address_owner: {
            type: "varchar"
        },
        name: {
            type: "varchar"
        },
        description: {
            type: "text"
        },
        created_at: {
            type: "date"
        },
        updated_at: {
            type: "date"
        }
    }
});
