const { getConnection } = require("typeorm");
const { AppDataSource } = require("../config/data-source");

class CourseController {
    getCourses(address) {
        return AppDataSource.getRepository("Course")
            .createQueryBuilder()
            .where("address_owner = :address", { address: address })
            .getMany()
    }

    getCoursesExceptAddress(address) {
        return AppDataSource.getRepository("Course")
            .createQueryBuilder()
            .where("address_owner <> :address", { address: address })
            .getMany()
    }

    createCourse({name, price, description, address_owner}) {
        return AppDataSource.getRepository("Course")
            .createQueryBuilder()
            .insert()
            .values({
                name, price, description, address_owner,
                created_at: Date.now(),
                updated_at: Date.now()
            })
            .execute();
    }
}

module.exports = new CourseController;