'use strich';

const { json } = require('body-parser');

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/').get(jsonku.index);
    app.route('/tampil').get(jsonku.tampilsemuadatamahasiswa);
    app.route('/tampil/:id').get(jsonku.tampilberdasarkanid);
    app.route('/tambah').post(jsonku.tambahmahasiswa);
    app.route('/ubah').put(jsonku.ubahdatamahasiswa);
    app.route('/hapus').delete(jsonku.hapusdatamahasiswa);
    app.route('/tampilmatakuliah').get(jsonku.tampilgrupmatakuliah);
    app.route('/listmatakuliah').get(jsonku.tampilsemuadatamatakuliah);
}