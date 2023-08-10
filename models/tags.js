const db = require('../util/database')

module.exports = class tags {
    constructor(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }

    static fetchAll(){
        return db.query('SELECT * FROM tags')
    }

    static fetchByID(params){
        return db.query('SELECT * FROM tags WHERE id = ?', [params.id])
    }

    static post(params){
        return db.query('INSERT INTO `tags` (`name`) VALUES (?)', [params.name])
    }

    static edit(params){
        return db.query('UPDATE `job_application`.`tags` SET `name` = ? WHERE (`id` = ?)', [params.name, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM tags WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `job_application`.`tags` SET `status` = ? WHERE (`id` = ?)', [params.status, params.id])
    }
}
