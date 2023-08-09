const db = require('../util/database')

module.exports = class reports {
    constructor(id, job, user, feedback, date, status) {
        this.id = id;
        this.job = job;
        this.user = user;
        this.feedback = feedback;
        this.date = date;
        this.status = status;
    }
    }
