const db = require('../util/database')

module.exports = class CvSkill {
    constructor(id, cv, skill) {
        this.id = id;
        this.cv = cv;
        this.skill = skill;
    }
    }
