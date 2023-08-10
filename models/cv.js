const db = require('../util/database')

module.exports = class Country {
    constructor(id, user, statement) {
        this.id = id;
        this.user = user;
        this.statement = statement;
    }

    static fetchAll(){
        return db.query('SELECT cv.*, seekers.name, seekers.username, seekers.email, seekers.password, seekers.phone, seekers.address, seekers.dob, seekers.gender FROM cv INNER JOIN seekers ON seekers.id = cv.user')
    }

    static fetchByID(params){
        return db.query('SELECT cv.*, seekers.name, seekers.username, seekers.email, seekers.password, seekers.phone, seekers.address, seekers.dob, seekers.gender FROM cv INNER JOIN seekers ON seekers.id = cv.user WHERE id = ?', [params.id])
    }

    static post(params){
        return db.query('INSERT INTO `cv` (`user`, `statement`) VALUES (?, ?)', [params.user, params.statement])
    }

    static edit(params){
        return db.query('UPDATE `cv` SET `user` = ?, `statement` = ? WHERE (`id` = ?)', [params.user, params.statement, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM cv WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `cv` SET `status` = ? WHERE (`id` = ?)', [params.status, params.id])
    }
}
