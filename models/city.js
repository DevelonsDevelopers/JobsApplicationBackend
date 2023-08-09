const db = require('../util/database')

module.exports = class City {
    constructor(id, name, country, description, status) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.description = description;
        this.status = status;
    }
}