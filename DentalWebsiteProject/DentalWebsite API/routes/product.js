var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('dentalDB', ['products']);
var key = 'YcUcJwNM5sN9iSaNmGvF';

router.get('/:key', function (req, res, next) {
    if (req.params.key == key) {
        db.products.find(function (err, products) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).json(products);
            }
        });
    }
});

router.get('/:id&:key', function (req, res, next) {
    if (req.params.key == key) {
        db.products.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, product) {
            if (err) {
                res.status(500).send(err);
            }
            else if (product == null) {
                res.status(404).send(JSON.stringify('Product not found.'));
            }
            else {
                res.status(200).json(product);
            }
        });
    }
});

router.post('/:key', function (req, res, next) {
    if (req.params.key == key) {
        const product = {
            name: req.body.name,
            category: req.body.category
        };

        db.products.save(product, function (err) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send(JSON.stringify('Product sucessfully added.'));
            }
        });
    }
    else {
        res.status(401).send(JSON.stringify('Invalid key.'));
    }
});

router.delete('/:id&:key', function (req, res, next) {
    if (req.params.key == key) {
        db.products.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, obj) {
            if (err) {
                res.status(500).send(err);
            }
            else if (obj.deletedCount == 0) {
                res.status(404).send(JSON.stringify('Product not found.'));
            }
            else {
                res.status(200).send(JSON.stringify('Product succesfully deleted.'));
            }
        });
    }
    else {
        res.status(401).send(JSON.stringify('Invalid key.'));
    }
});

router.put('/:id&:key', function (req, res, next) {
    if (req.params.key == key) {
        const updateProduct = {
            name: req.body.name,
            category: req.body.category
        };

        db.products.update({ _id: mongojs.ObjectId(req.params.id) }, updateProduct, {}, function (err, obj) {
            if (err) {
                res.status(500).send(err);
            }
            else if (obj.nModified == 0) {
                res.status(404).send(JSON.stringify('Product not found.'));
            }
            else {
                res.status(200).send(JSON.stringify('Product sucessfully updated.'));
            }
        });
    }
    else {
        res.status(401).send(JSON.stringify('Invalid key.'));
    }

});

module.exports = router;