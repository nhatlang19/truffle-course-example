const { AppDataSource } = require("../config/data-source");

class CourseUserController {
    getCourseByAddress(course_id, address_user) {
        return AppDataSource.getRepository("CourseUser")
            .createQueryBuilder()
            .where("course_id = :course_id", { course_id: course_id })
            .andWhere("address_user LIKE :address_user", { address_user: address_user })
            .getOne()
    }
    
    getByCourses(courseIds) {
        return AppDataSource.getRepository("CourseUser")
            .createQueryBuilder()
            .where("course_id in (:courseIds)", { courseIds: courseIds })
            .getMany()
    }

    save({price, course_id, address_user}) {
        return AppDataSource.getRepository("CourseUser")
            .createQueryBuilder()
            .insert()
            .values({
                price, course_id, address_user
            })
            .execute();
    }
}

module.exports = new CourseUserController;