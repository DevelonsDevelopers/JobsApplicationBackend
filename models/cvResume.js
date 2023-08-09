const db = require('../util/database')

module.exports = class CvResume {
    constructor(id, cv, resume) {
        this.id = id;
        this.cv = cv;
        this.resume = resume;
    }
    }
