const db = require('../util/database')

module.exports = class CvLanguages {
    constructor(id, cv, language) {
        this.id = id;
        this.cv = cv;
        this.language = language;
    }
}