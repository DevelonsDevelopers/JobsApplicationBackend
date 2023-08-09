const db = require('../util/database')

module.exports = class featured {
    constructor(id, job, days, date, status) {
        this.id = id;
        this.job = job;
        this.days = days
        this.date = date;
        this.status = status;
    }
}