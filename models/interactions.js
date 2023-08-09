const db = require('../util/database')

module.exports = class interactions {
    constructor(id, job, user, query, title, interactiontype, status, createddate) {
        this.id = id;
        this.job = job;
        this.user = user;
        this.query = query;
        this.title = title;
        this.interactiontype = interactiontype;
        this.status = status;
        this.createddate = createddate;
    }
    }
