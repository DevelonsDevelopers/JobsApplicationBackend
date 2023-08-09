const db = require('../util/database')

module.exports = class CvInterest {
    constructor(id, cv, interest) {
        this.id = id;
        this.cv = cv;
        this.interest = interest;
    }
}