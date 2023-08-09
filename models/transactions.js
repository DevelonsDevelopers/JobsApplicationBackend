const db = require('../util/database')

module.exports = class transactions {
    constructor(id, user, plan, date, amount, status) {
        this.id = id;
        this.user = user;
        this.plan = plan;
        this.date = date;
        this.amount = amount;
        this.status = status;
    }
    }
