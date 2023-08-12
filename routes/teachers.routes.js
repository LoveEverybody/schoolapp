const express = require('express');
const Teacher = require('../models/Teacher.model');
const Subject = require('../models/Subject.model');
const router = express.Router();


router.get("/new-teacher", (req, res) => {
    res.render('new-teacher')
})


router.post("/new-teacher", (req, res) => {
    const { name, password, phoneNumber, email } = req.body
    Teacher.create({ name, password, phoneNumber, email })
        .then(() => {
            res.redirect("/teacher")
        })
        .catch((err) => {
            console.log(err)
        })
})
router.get("/:id/details", (req, res, next) => {
    Teacher.findById(req.params.id)
        .then(teacherToBeShowed => {           
            res.render("show-teacher", teacherToBeShowed)
        })
        .catch(err => {
            console.log(err);
           
        });
})

router.get('/:id/edit', (req, res) => {
Teacher.findById(req.params.id)
      .then((oneTeacherToBeEdited) => {
        console.log(oneTeacherToBeEdited)
        res.render('edit-teacher', oneTeacherToBeEdited)
      })
      .catch((err) => {
        console.log(err)
      })
  })
  router.post('/:id/edit', (req, res) => {
    const { name, phoneNumber, email } = req.body
    Teacher.findByIdAndUpdate(req.params.id, { name, phoneNumber, email })
      .then((updatedTeacher) => {
        res.redirect('/teacher')
      })
      .catch(err => {
        console.log(err)
      })
  })
  router.get("/", (req, res) => {
    Teacher.find()
        .then((allTeachers) => {
            res.render('teacher', { allTeachers })
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router