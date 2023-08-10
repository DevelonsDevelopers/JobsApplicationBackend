const db = require('../util/database')

module.exports = class Seeker {
    constructor(id, name, username, email, password, phone, address, status, dob, gender) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password
        this.phone = phone;
        this.address = address;
        this.status = status;
        this.dob = dob;
        this.gender = gender;
    }

    static fetchAll(){
        return db.query('SELECT * FROM seekers')
    }

    static fetchByID(params){
        return db.query('SELECT * FROM seekers WHERE id = ?', [params.id])
    }

    static post(params){
        return db.query('INSERT INTO `job_application`.`seekers` (`name`, `username`, `email`, `password`, `phone`, `address`, `dob`, `gender`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [params.name, params.username, params.email, params.password, params.phone, params.address, params.dob, params.gender])
    }

    static edit(params){
        return db.query('UPDATE `seekers` SET `name` = ?, `username` = ?, `email` = ?, `password` = ?, `phone` = ?, `address` = ?, `dob` = ?, `gender` = ? WHERE (`id` = ?)', [params.name, params.username, params.email, params.password, params.phone, params.address, params.dob, params.gender, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM seekers WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `seekers` SET `status` = ? WHERE id = ?', [params.status, params.id])
    }
}
