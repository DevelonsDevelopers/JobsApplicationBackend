const db = require('../util/database')

module.exports = class Country {
    constructor(id, user, statement) {
        this.id = id;
        this.user = user;
        this.statement = statement;
    }
}