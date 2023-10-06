const db = require('../util/database')

module.exports = class ApiJobs {
    constructor(id, title, description, locations, site, date, company, salary) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.locations = locations;
        this.site = site;
        this.date = date;
        this.company = company;
        this.salary = salary;
    }

    static fetchAll(){
        return db.query('SELECT * FROM api_jobs')
    }

    static post(params){
        return db.query('INSERT INTO `api_jobs` (`title`, `description`, `locations`, `site`, `date`, `company`, `salary`) VALUES (?, ?, ?, ?, ?, ?, ?)', [params.title, params.description, params.locations, params.site, params.date, params.company, params.salary])
    }
}





