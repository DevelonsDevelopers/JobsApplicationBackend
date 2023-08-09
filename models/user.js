const db = require('../util/database')

module.exports = class User {
    constructor(id, name, username, email, password, phone, address, status) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
    }

    static fetchAll(){
        return db.query('SELECT * FROM user')
    }
}
