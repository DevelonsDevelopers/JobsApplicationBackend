const db = require('../util/database')
const bcrypt = require('bcrypt')

module.exports = class CompanyAuthentication {
    constructor(id, name, email, password, phone, headquater, status) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.headquater = headquater;
        this.status = status;
    }

    static checkName(params){
        return db.query('SELECT * FROM companies WHERE name = ?', [params.name])
    }

    static checkEmail(params){
        return db.query('SELECT * FROM companies WHERE email = ?', [params.email])
    }

    static register(params){
        const hashedPassword = bcrypt.hashSync(params.password, 10);
        return db.query('INSERT INTO `user` (`name`, `username`, `email`, `password`, `phone`, `address`) VALUES (?, ?, ?, ?, ?, ?)', [params.name, params.username, params.email, hashedPassword, params.phone, params.address])
    }
}
