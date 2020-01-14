var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var mongojs = require('mongojs');
var db = mongojs('dentalDB', ['login']);
var key = 'YcUcJwNM5sN9iSaNmGvF';

router.get('/:name&:password', function (req, res, next) {
    db.login.find(function (err, user) {
        if (err) {
            res.status(500).send(err);
        }

        if (req.params.name == user[0].name && bcrypt.compareSync(req.params.password, user[0].password)) {
            res.status(200).send(JSON.stringify(key));
        }
        else {
            res.status(401).send(JSON.stringify("Invalid name or password."));
        }
    });
});

router.put('/:key', function (req, res, next) {
    if (req.params.key == key) {
        var updateUser = {
            name: "admin",
            password: bcrypt.hashSync(req.body.password, 10)
        };

        db.employees.update({ name: "admin" }, updateUser, {}, function (err, obj) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send(JSON.stringify('Password updated.'));
            }
        });
    }
    else {
        res.status(401).send(JSON.stringify('Invalid key.'));
    }
});

module.exports = router;