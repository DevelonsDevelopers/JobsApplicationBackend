const db = require('../util/database')

module.exports = class applied {
    constructor(id, job, user, data, proposal) {
        this.id = id;
        this.job = job;
        this.user = user;
        this.data = data;
        this.proposal = proposal;
    }
}