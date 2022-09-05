const dbService = require('./db-service');



function saveImage(req, res) {
    var orignalFile = req.file;

    var fileData = [[orignalFile.encoding], [orignalFile.mimetype],
        [orignalFile.filename], [orignalFile.path], [orignalFile.size]];

    var sql = "INSERT INTO `profileImage` (encoding, mimetype, filename, path, size) VALUES (?)";

    dbService.con.query(sql, [fileData], (err, results, fields) => {
        if(err) throw err;
    });

    // console.log('inserted');

    return;

}

function getImage(id, callback) {
    var sql = "SELECT * FROM profileImage WHERE id = ?"

    dbService.con.query(sql, [id], function(err, results, fields) {
        if(err) throw err;

        var imageData = [results[0].id, results[0].encoding, results[0].mimeType, 
                    results[0].filename, results[0].path, results[0].size];


        return callback(imageData);

    })

}

module.exports = {
    saveImage,
    getImage, 
}