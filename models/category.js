const db = require('../util/database')

module.exports = class Category {
    constructor(id, name, description, image, status) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.status = status;
    }

    static fetchAll(){
        return db.execute('SELECT * FROM categories')
    }
}
