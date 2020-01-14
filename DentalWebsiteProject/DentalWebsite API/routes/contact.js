var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('dentalDB', ['contacts']);
var key = 'YcUcJwNM5sN9iSaNmGvF';

router.get('/', function (req, res, next) {
    db.contacts.find(function (err, contacts) {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).json(contacts);
        }
    });
});

router.get('/:id', function (req, res, next) {
    db.contacts.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, contact) {
        if (err) {
            res.status(500).send(err);
        }
        else if (contact == null) {
            res.status(404).send(JSON.stringify('Contact not found.'));
        }
        else {
            res.status(200).json(contact);
        }
    });
});

router.post('/:key', function (req, res, next) {
    if (req.params.key == key) {
        const contact = {
            type: req.body.type,
            value: req.body.value
        };

        db.contacts.save(contact, function (err) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send(JSON.stringify('Contact sucessfully added.'));
            }
        });
    }
    else {
        res.status(401).send(JSON.stringify('Invalid key.'));
    }
});

router.delete('/:id&:key', function (req, res, next) {
    if (req.params.key == key) {
        db.contacts.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, obj) {
            if (err) {
                res.status(500).send(err);
            }
            else if (obj.deletedCount == 0) {
                res.status(404).send(JSON.stringify('Contact not found.'));
            }
            else {
                res.status(200).send(JSON.stringify('Contact succesfully deleted.'));
            }
        });
    }
    else {
        res.status(401).send(JSON.stringify('Invalid key.'));
    }
});

router.put('/:id&:key', function (req, res, next) {
    if (req.params.key == key) {
        const updateContact = {
            type: req.body.type,
            value: req.body.value,
        };

        db.contacts.update({ _id: mongojs.ObjectId(req.params.id) }, updateContact, {}, function (err, obj) {
            if (err) {
                res.status(500).send(err);
            }
            else if (obj.nModified == 0) {
                res.status(404).send(JSON.stringify('Contact not found.'));
            }
            else {
                res.status(200).send(JSON.stringify('Contact sucessfully updated.'));
            }
        });
    }
    else {
        res.status(401).send(JSON.stringify('Invalid key.'));
    }

});

module.exports = router;