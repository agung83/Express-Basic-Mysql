const tampil = (req, res) => {
    let query = "SELECT * FROM `tbl_admin`";
    db.query(query, (err, result) => {
        // console.log(err)
        res.render('index', {
            admin: result
        });
    });

}

const formSimpan = (req, res) => {
    res.render('formSave')
}

const aksiSimpan = (req, res) => {
    let nama = req.body.nama
    let usernama = req.body.username
    let password = req.body.password
    let email = req.body.email
    let hobi = req.body.hobi

    // console.log(usernama);

    let query = "INSERT INTO `tbl_admin` (admin_nama, admin_username, admin_password, admin_email, admin_foto) VALUES ('" + nama + "','" + usernama + "','" + password + "','" + email + "','" + hobi + "')";
    db.query(query, (err, result) => {
        console.log(err)
        res.render('formSave', {
            message: 'berhasil disimpan',
            messageClass: 'alert-info'
        });


    });

}


const hapus = (req, res) => {
    var idhapus = req.params.id;
    console.log(idhapus);
    let query = 'DELETE FROM tbl_admin WHERE admin_id = "' + idhapus + '" ';

    db.query(query, (err, result) => {
        if (err != null) {
            res.redirect('/');
        } else {

            res.redirect('/');
            console.log(err);
        }

    })
}

const formEdit = (req, res) => {
    var idedit = req.params.id;

    var query = "SELECT * FROM tbl_admin WHERE admin_id = '" + idedit + "'  ";

    db.query(query, (err, result) => {
        console.log(result);

        if (err != null) {

            console.log(err);
            return res.status(500).send(err);

        }

        res.render('formEdit', {
            dataEdit: result[0] //untuk menampilkan data di edit kita panggil index data nol, kalau tidak pakai nl tidak akan tampil di view
        })


    });
}

const aksiUpdate = (req, res) => {
    let nama = req.body.nama;
    let usernama = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let hobi = req.body.hobi;
    let id = req.body.id;



    var query = "UPDATE tbl_admin SET admin_nama = '" + nama + "', admin_username = '" + usernama + "', admin_password = '" + password + "', admin_email = '" + email + "', admin_foto = '" + hobi + "' WHERE admin_id = '" + id + "'";

    console.log(query);

    db.query(query, (err, result) => {
        console.log(result);
        res.redirect('/');

    })

}

module.exports = {
    getAll: tampil,
    formSave: formSimpan,
    actionSave: aksiSimpan,
    delete: hapus,
    formUpdate: formEdit,
    actionUpdate: aksiUpdate
}