var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('dentalDB', ['subscribers']);
var key = 'YcUcJwNM5sN9iSaNmGvF';
var public_client_key = '2033792262';

router.get('/:key', function (req, res, next) {
    if (req.params.key == key) {
        db.subscribers.find(function (err, subscribers) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).json(subscribers);
            }
        });
    }
    else {
        res.status(401).send('Invalid key.');
    }
});

router.get('/:id', function (req, res, next) {
    if (req.params.key == key) {
        db.contacts.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, subscriber) {
            if (err) {
                res.status(500).send(err);
            }
            else if (subscriber == null) {
                res.status(404).send('Subscriber not found.');
            }
            else {
                res.status(200).json(subscriber);
            }
        });
    }
    else {
        res.status(401).send('Invalid key.');
    }
});

router.post('/:public_key', function (req, res, next) {
    console.log(req.params.public_key);
    if (req.params.public_key == public_client_key) {
        const subscriber = {
            email: req.body.email,
            name: req.body.name
        };
        db.subscribers.save(subscriber, function (err) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send('Subscriber sucessfully added.');
            }
        });
    }
    else {
        res.status(401).send('Invalid key.');
    }
});

router.delete('/:id&:key', function (req, res, next) {
    if (req.params.key == key) {
        db.subscribers.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, obj) {
            if (err) {
                res.status(500).send(err);
            }
            else if (obj.deletedCount == 0) {
                res.status(404).send('Subscriber not found.');
            }
            else {
                res.status(200).send('Subscriber succesfully deleted.');
            }
        });
    }
    else {
        res.status(401).send('Invalid key.');
    }
});

router.put('/:id&:key', function (req, res, next) {
    if (req.params.key == key) {
        const updateSubscriber = {
            email: req.body.email,
        };

        db.subscribers.update({ _id: mongojs.ObjectId(req.params.id) }, updateSubscriber, {}, function (err, obj) {
            if (err) {
                res.status(500).send(err);
            }
            else if (obj.nModified == 0) {
                res.status(404).send('Subscriber not found.');
            }
            else {
                res.status(200).send('Subscriber sucessfully updated.');
            }
        });
    }
    else {
        res.status(401).send('Invalid key.');
    }

});

module.exports = router;