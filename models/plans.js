const db = require('../util/database')

module.exports = class plans {
    constructor(id, name, amount, type, accounttype, timeperiod, purpose, status) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.type = type;
        this.accounttype = accounttype;
        this.purpose = purpose;
        this.status = status;
    }
    }
