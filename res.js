'use strich';

exports.ok = function (values, res) {
    var data = {
        'status': 200,
        'values': values
    };

    res.json(data);
    res.end();
}

// Response untuk nested matakuliah
exports.oknested = function (values, res) {
    // Melakukan akumulasi
    const hasil = values.reduce((akumulasikan, item) => {
        // tentukan key grupnya
        if (akumulasikan[item.nama]) {
            // membuat variabel grup nama mahasiswa
            const group = akumulasikan[item.nama];
            // cek jika isi array adalah matakuliah
            if (Array.isArray(group.matakuliah)) {
                // Tambahkan valuenya ke dalam grup matakuliah
                group.matakuliah.push(item.matakuliah);
            } else {
                group.matakuliah = [group.matakuliah, item.matakuliah];
            }
        } else {
            akumulasikan[item.nama] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status': 200,
        'values': hasil
    };

    res.json(data);
    res.end();
}