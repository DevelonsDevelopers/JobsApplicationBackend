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
}