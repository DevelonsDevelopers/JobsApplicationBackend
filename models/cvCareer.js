const db = require('../util/database')

module.exports = class CvCareer {
    constructor(id, cv, company, job, timeperiod, address, phone) {
        this.id = id;
        this.cv = cv;
        this.company = company;
        this.job = job;
        this.timeperiod = timeperiod;
        this.address = address;
        this.phone = phone;
    }


}
