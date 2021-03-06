var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('dentalDB', ['employees']);
var key = 'YcUcJwNM5sN9iSaNmGvF';

router.get('/', function (req, res, next) {
    db.employees.find(function (err, employees) {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).json(employees);
        }
    });
});

router.get('/:id&:key', function (req, res, next) {
    if (req.params.key == key) {
        db.employees.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, employee) {
            if (err) {
                res.status(500).send(err);
            }
            else if (employee == null) {
                res.status(404).send(JSON.stringify('Employee not found.'));
            }
            else {
                res.status(200).json(employee);
            }
        });
    }
});

router.post('/:key', function (req, res, next) {
    if (req.params.key == key) {
        const employee = {
            name: req.body.name,
            specialization: req.body.specialization,
            introduction: req.body.introduction,
            email: req.body.email,
            telephone: req.body.telephone,
            image: req.body.image
        };

        db.employees.save(employee, function (err) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send(JSON.stringify('Employee sucessfully added.'));
            }
        });
    }
    else {
        res.status(401).send(JSON.stringify('Invalid key.'));
    }
});

router.delete('/:id&:key', function (req, res, next) {
    if (req.params.key == key) {
        db.employees.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, obj) {
            if (err) {
                res.status(500).send(err);
            }
            else if (obj.deletedCount == 0) {
                res.status(404).send(JSON.stringify('Employee not found.'));
            }
            else {
                res.status(200).send(JSON.stringify('Employee succesfully deleted.'));
            }
        });
    }
    else {
        res.status(401).send(JSON.stringify('Invalid key.'));
    }
});

router.put('/:id&:key', function (req, res, next) {
    if (req.params.key == key) {
        const updateEmployee = {
            name: req.body.name,
            specialization: req.body.specialization,
            introduction: req.body.introduction,
            email: req.body.email,
            telephone: req.body.telephone,
            image: req.body.image
        };

        db.employees.update({ _id: mongojs.ObjectId(req.params.id) }, updateEmployee, {}, function (err, obj) {
            if (err) {
                res.status(500).send(err);
            }
            else if (obj.nModified == 0) {
                res.status(404).send(JSON.stringify('Employee not found.'));
            }
            else {
                res.status(200).send(JSON.stringify('Employee sucessfully updated.'));
            }
        });
    }
    else {
        res.status(401).send(JSON.stringify('Invalid key.'));
    }

});

module.exports = router;