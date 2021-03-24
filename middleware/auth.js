var connection = require('../koneksi');
var mysql = require('mysql');
var md5 = require('MD5');
var response = require('../res');
var jwt = require('jsonwebtoken');
var config = require('../config/secret');
var ip = require('ip');

// Controller untuk register
exports.registrasi = function (req, res) {
    var post = {
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password),
        role: req.body.role,
        tanggal_daftar: new Date()
    }

    // Cek apakah user sudah pernah mendaftar
    var Query = "SELECT email FROM ?? WHERE ??";
    var table = ["user", "email", post.email];

    Query = mysql.format(query.table);
    connection.query(query, function (error, rows,) {
        if (error) {
            console.log(error);
        } else {
            if (rows.length == 0) {
                var Query = "INSER INTO ?? SET ?";
                var table = ["user"];
                Query = mysql.format(query, table);
                connection.Query(query, post, function (error, rows) {
                    if (error) {
                        console.log(error);
                    } else {
                        response.ok("Berhasil menambahkan data user baru", res);
                    }
                });
            } else {
                response.ok("Email sudah terdaftar");
            }
        }
    });
}