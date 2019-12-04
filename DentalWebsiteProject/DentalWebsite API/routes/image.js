var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('dentalDB', ['images']);
const multer = require('multer');
const upload = multer({ dest: __dirname + '/uploads' });
const path = require("path");
const fs = require("fs");
var crypto = require("crypto");
var key = 'YcUcJwNM5sN9iSaNmGvF';

router.post("/:key", upload.single("file"), function (req, res) {
    if (req.params.key == key) {
        const tempPath = req.file.path;
        const targetPath = path.join(__dirname, "./uploads/" + req.file.originalname.split(".")[0] + crypto.randomBytes(10).toString('hex') + ".png");

        const image = {
            path: "./uploads/" + req.file.originalname.split(".")[0] + crypto.randomBytes(10).toString('hex') + ".png"
        };

        if (path.extname(req.file.originalname).toLowerCase() === ".png") {
            fs.rename(tempPath, targetPath, err => {
                if (err) {
                    res.status(500).send(err);
                }

                db.images.save(image, function (err) {
                    if (err) {
                        res.status(500).send(err);
                    }
                    else {
                        res.status(200).contentType("text/plain").end("File uploaded!");
                    }
                });
            });
        } else {
            fs.unlink(tempPath, err => {
                if (err) {
                    res.status(500).send(err);
                }

                res.status(403).contentType("text/plain").end("Only .png files are allowed!");
            });
        }
    }
    else {
        res.status(401).send('Invalid key.');
    }
}
);

module.exports = router;