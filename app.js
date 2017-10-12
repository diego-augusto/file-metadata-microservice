const express = require('express');
const app = express();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/get-file-size', upload.single('file'), function (req, res){
    res.json({size : req.file.size });
});

app.listen(3000);