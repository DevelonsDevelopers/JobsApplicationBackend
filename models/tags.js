const db = require('../util/database')

module.exports = class tags {
    constructor(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    }
