const db = require('../util/database')

module.exports = class City {
    constructor(id, name, country, description, status) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.description = description;
        this.status = status;
    }

    static fetchAll(){
        return db.query('SELECT cities.*, countries.name as country_name FROM cities INNER JOIN countries ON countries.id = cities.country')
    }

    static fetchByID(params){
        return db.query('SELECT cities.*, countries.name as country_name FROM cities INNER JOIN countries ON countries.id = cities.country WHERE cities.id = ?', [params.id])
    }

    static post(params){
        return db.query('INSERT INTO `cities` (`name`, `country`, `description`) VALUES (?, ?, ?)', [params.name, params.country, params.description])
    }

    static edit(params){
        return db.query('UPDATE `cities` SET `name` = ?, `country` = ?, `description` = ? WHERE (`id` = ?)', [params.name, params.country, params.description, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM cities WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `cities` SET `name` = ? WHERE (`id` = ?)', [params.name, params.id])
    }
}
