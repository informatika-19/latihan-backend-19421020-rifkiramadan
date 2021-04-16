const kegiatanModel = require('../model/Kegiatan')

exports.create = (data) =>
new Promise((resolve, reject) => {
    // kegiatanModel.create, Fungsi untuk menyimpan kegiatan
    kegiatanModel.create(data)
    .then(() => resolve({
        status: true,
        pesan: 'BERHASIL INPUT KEGIATAN'
    })).catch(() => reject({
        status: false,
        pesan: 'GAGAL INPUT KEGIATAN'
    }))
})