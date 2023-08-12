const express = require('express');
const router = express.Router();

router.get("/signup", (req, res) => {
    res.render('auth/signup')
})

router.post("/signup", (req, res) => {    
    const { name, email, password, type } = req.body

    let Mymodel;

    if (type==="Teacher") {
       Mymodel = require('../models/Teacher.model');
    } else {
       Mymodel = require('../models/Student.model');
    }

    console.log("-----------------------------")
    console.log(Mymodel)
    Mymodel.create({ name, email, password, type })
    .then()
    
    .catch((err)=>{
        console.log(err)
    })

})
router.get("/signup", (req, res) => {
    res.render('auth/signup')
})

router.post("/signup", (req, res) => {    
    const { name, email, password, type } = req.body

    let Mymodel;

    if (type==="Teacher") {
       Mymodel = require('../models/Teacher.model');
    } else {
       Mymodel = require('../models/Student.model');
    }

    console.log("-----------------------------")
    console.log(Mymodel)
    Mymodel.create({ name, email, password, type })
    .then()
    
    .catch((err)=>{
        console.log(err)
    })

})

router.get("/signin", (req, res) => {
    res.render('auth/signin')
})

router.post("/signin", (req, res) => {    
    const {  email, password, type } = req.body

    let Mymodel;

    if (type==="Teacher") {
       Mymodel = require('../models/Teacher.model');
    } else {
       Mymodel = require('../models/Student.model');
    }

    console.log("-----------------------------")
    console.log(Mymodel)
    Mymodel.create({ email, password, type })
    .then()
    
    .catch((err)=>{
        console.log(err)
    })

})

module.exports = router
