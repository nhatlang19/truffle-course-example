const express = require('express');
const router = express.Router();

const CourseController = require("../controller/course")

router.get('/:address', (req, res) => {
    CourseController.getCourses(req.params.address).then((data) => {
        res.json({data});
    })
});

router.post('/', (req, res) => {
    CourseController.createCourse({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        address_owner: req.body.address_owner
    }).then((data) => {
        res.json({id: data.raw});
    })
    
});

router.get('/list/:address', (req, res) => {
    CourseController.getCoursesExceptAddress(req.params.address).then((data) => {
        res.json({data});
    })
});


module.exports = router;