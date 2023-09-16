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

    static fetchRecommended(params){
        return db.query('SELECT seekers.*, cities.name as city_name, countries.name as country_name FROM job_application.seekers LEFT JOIN cities ON cities.id = seekers.city LEFT JOIN countries ON countries.id = seekers.country INNER JOIN jobs ON jobs.tags LIKE CONCAT(\'%\', seekers.role ,\'%\') WHERE jobs.id = ?', [params.job])
    }

    static fetchByID(params){
        return db.query('SELECT seekers.*, cities.name as city_name, countries.name as country_name, (SELECT COUNT(*) FROM bookmarks WHERE bookmarks.user = seekers.id) as saved , (SELECT COUNT(*) FROM applied WHERE applied.user = seekers.id) as applied FROM seekers LEFT JOIN cities ON cities.id = seekers.city LEFT JOIN countries ON countries.id = seekers.country WHERE seekers.id = ?', [params.id])
    }

    static post(params){
        return db.query('INSERT INTO `job_application`.`seekers` (`name`, `username`, `email`, `password`, `phone`, `address`, `dob`, `gender`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [params.name, params.username, params.email, params.password, params.phone, params.address, params.dob, params.gender])
    }

    static edit(params){
        return db.query('UPDATE `seekers` SET `name` = ?, `city` = ?, `country` = ?, `username` = ?, `phone` = ?, `address` = ?, `dob` = ?, `gender` = ? WHERE (`id` = ?)', [params.name, params.city, params.country, params.username, params.phone, params.address, params.dob, params.gender, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM seekers WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `seekers` SET `status` = ? WHERE id = ?', [params.status, params.id])
    }

    static verify(params){
        return db.query('UPDATE `seekers` SET `verified` = ?, `phone` = ? WHERE id = ?', [params.verify, params.phone, params.id])
    }
}
