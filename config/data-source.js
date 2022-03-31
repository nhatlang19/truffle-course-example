const { DataSource } = require("typeorm");

const AppDataSource = new DataSource({
    "name": "default",
    "type": "sqlite",
    "database": "./temp/sqlitedb-1.db",
    "logging": true,
    "relationLoadStrategy": "join",
    "entities": ["entity/**/*.js"],
    "migrations": [ "migration/**/*.js" ], 
    "migrationsTableName": "migrations",
    "cli": { 
        "migrationsDir":"migration"
    }
});

module.exports = {AppDataSource};
