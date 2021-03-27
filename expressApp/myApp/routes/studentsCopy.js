var express = require('express');
var router = express.Router();
const { ObjectID } = require('mongodb');
const fs = require('fs')


router.get('/', function (req, res) {
    req.db.collection('students').find().toArray()
        .then(data => {
            res.json(data)
        })


})

function validatingBody(req, res, next) {
    let email = req.body.email, Id = req.body.Id, fname = req.body.fname, lname = req.body.lname, Major = req.body.major;

    if (email === undefined || Id === undefined || fname === undefined || lname === undefined || Major === undefined) {

        res.json({ status: "Invalid body" })

    }

    next()

}

router.post('/', validatingBody, function (req, res) {
    req.db.collection('students').findOne({ email: req.body.email })
        .then(data => {
            if (!data) {
                req.db.collection('students').insertOne(req.body)
                    .then(data => {
                        res.json({ status: 'success' })
                    })
            } else {
                res.json({ status: "User exist" })
            }
        })
        .catch(err => {
            res.json({ status: err })
        })

})

router.delete('/:id', (req, res) => {
    console.log(typeof (req.params.id))
    let Id = req.params.id
    req.db.collection('students').removeOne({ ID: Id })
        .then(data => {
            res.json({ status: 'success' })
        })
        .catch(err => {
            res.json({ status: err })
        })
})



module.exports = router