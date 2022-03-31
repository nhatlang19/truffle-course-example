const express = require('express');
const router = express.Router();

const CourseUserController = require("../controller/course_user")

router.get('/:course_id/:address', (req, res) => {
    const {course_id, address} = req.params;
    CourseUserController.getCourseByAddress(course_id, address).then((data) => {
        res.json({data});
    })
});

router.post('/', (req, res) => {
    CourseUserController.save({
        price: req.body.price,
        course_id: req.body.course_id,
        address_user: req.body.address_user
    }).then((data) => {
        res.json({id: data.raw});
    })
});

module.exports = router;