const db = require('../util/database')

module.exports = class Country {
    constructor(id, name, size, city, country, phone, email, password, headquater, type, status) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.city = city;
        this.country = country;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.headquater = headquater;
        this.type = type;
        this.status = status;
    }

    static fetchAll(){
        return db.query('SELECT companies.id, companies.name, companies.size, companies.phone, companies.email, companies.headquater, companies.type, cities.name as city, countries.name as country FROM companies INNER JOIN cities ON cities.id = companies.city INNER JOIN countries ON countries.id = companies.country')
    }

    static fetchByID(params){
        return db.query('SELECT companies.id, companies.name, companies.size, companies.phone, companies.email, companies.headquater, companies.type, cities.name as city, countries.name as country FROM companies INNER JOIN cities ON cities.id = companies.city INNER JOIN countries ON countries.id = companies.country WHERE companies.id = ?', [params.id])
    }

    static post(params){
        return db.query('INSERT INTO `companies` (`name`, `size`, `city`, `country`, `phone`, `email`, `password`, `headquater`, `type`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [params.name, params.size, params.city, params.country, params.phone, params.email, params.password, params.headquater, params.type])
    }

    static edit(params){
        return db.query('UPDATE `companies` SET `name` = ?, `size` = ?, `city` = ?, `country` = ?, `phone` = ?, `email` = ?, `password` = ?, `headquater` = ?, `type` = ? WHERE (`id` = ?)', [params.name, params.size, params.city, params.country, params.phone, params.email, params.password, params.headquater, params.type, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM companies WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `companies` SET `status` = ? WHERE id = ?', [params.status, params.id])
    }
}
