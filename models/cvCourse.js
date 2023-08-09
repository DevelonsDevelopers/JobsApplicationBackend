const db = require('../util/database')

module.exports = class CvCourse {
    constructor(id, cv, course, timeperiod, institute) {
        this.id = id;
        this.cv = cv;
        this.course = course;
        this.timeperiod = timeperiod;
        this.institute = institute;
    }
}