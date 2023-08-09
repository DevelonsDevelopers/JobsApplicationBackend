const db = require('../util/database')

module.exports = class CvEducation {
    constructor(id, cv, qualification, timeperiod, institute) {
        this.id = id;
        this.cv = cv;
        this.qualification = qualification;
        this.timeperiod = timeperiod;
        this.institute = institute;
    }
}