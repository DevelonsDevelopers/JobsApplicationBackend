const db = require('../util/database')

module.exports = class jobs {
    constructor(id, category, country, city, title, company, role, designation, salary, description, link, type, workdays, worktime, address, experience, qualification, skills, date, tags, status) {
        this.id = id;
        this.category = category;
        this.country = country;
        this.city = city;
        this.title = title;
        this.company = company;
        this.role = role;
        this.designation = designation;
        this.salary = salary;
        this.description = description;
        this.link = link;
        this.type = type;
        this.workdays = workdays;
        this.worktime = worktime;
        this.address = address;
        this.experience = experience;
        this.qualification = qualification;
        this.skills = skills;
        this.date = date;
        this.tags = tags;
        this.status = status;
    }

    static fetchAll(){
        return db.query('SELECT jobs.id, jobs.city, jobs.category, jobs.country, jobs.company, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, companies.name as company_name, categories.name as category_name, cities.name as city_name, countries.name as country_name FROM job_application.jobs INNER JOIN categories ON categories.id = jobs.category INNER JOIN countries ON countries.id = jobs.country INNER JOIN cities ON cities.id = jobs.city INNER JOIN companies ON companies.id = jobs.company')
    }

    static fetchByID(params){
        return db.query('SELECT jobs.id, jobs.city, jobs.category, jobs.country, jobs.company, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, companies.name as company_name, categories.name as category_name, cities.name as city_name, countries.name as country_name FROM job_application.jobs INNER JOIN categories ON categories.id = jobs.category INNER JOIN countries ON countries.id = jobs.country INNER JOIN cities ON cities.id = jobs.city INNER JOIN companies ON companies.id = jobs.company WHERE jobs.id = ?', [params.id])
    }

    static fetchByCountry(params){
        return db.query('SELECT jobs.id, jobs.city, jobs.category, jobs.country, jobs.company, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, companies.name as company_name, categories.name as category_name, cities.name as city_name, countries.name as country_name FROM job_application.jobs INNER JOIN categories ON categories.id = jobs.category INNER JOIN countries ON countries.id = jobs.country INNER JOIN cities ON cities.id = jobs.city INNER JOIN companies ON companies.id = jobs.company WHERE jobs.country = ?', [params.country])
    }

    static fetchByCity(params){
        return db.query('SELECT jobs.id, jobs.city, jobs.category, jobs.country, jobs.company, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, companies.name as company_name, categories.name as category_name, cities.name as city_name, countries.name as country_name FROM job_application.jobs INNER JOIN categories ON categories.id = jobs.category INNER JOIN countries ON countries.id = jobs.country INNER JOIN cities ON cities.id = jobs.city INNER JOIN companies ON companies.id = jobs.company WHERE jobs.city = ?', [params.city])
    }

    static fetchByCompany(params){
        return db.query('SELECT jobs.id, jobs.city, jobs.category, jobs.country, jobs.company, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, companies.name as company_name, categories.name as category_name, cities.name as city_name, countries.name as country_name FROM job_application.jobs INNER JOIN categories ON categories.id = jobs.category INNER JOIN countries ON countries.id = jobs.country INNER JOIN cities ON cities.id = jobs.city INNER JOIN companies ON companies.id = jobs.company WHERE jobs.company = ?', [params.company])
    }

    static fetchByCategory(params){
        return db.query('SELECT jobs.id, jobs.city, jobs.category, jobs.country, jobs.company, jobs.title, jobs.role, jobs.designation, jobs.salary, jobs.description, jobs.link, jobs.type, jobs.workdays, jobs.worktime, jobs.address, jobs.experience, jobs.qualification, jobs.skills, jobs.date, jobs.tags, companies.name as company_name, categories.name as category_name, cities.name as city_name, countries.name as country_name FROM job_application.jobs INNER JOIN categories ON categories.id = jobs.category INNER JOIN countries ON countries.id = jobs.country INNER JOIN cities ON cities.id = jobs.city INNER JOIN companies ON companies.id = jobs.company WHERE jobs.category = ?', [params.category])
    }

    static post(params){
        return db.query('INSERT INTO `job_application`.`jobs` (`category`, `country`, `city`, `title`, `company`, `role`, `designation`, `salary`, `description`, `link`, `type`, `workdays`, `worktime`, `address`, `experience`, `qualification`, `skills`, `date`, `tags`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [params.category, params.country, params.city, params.title, params.company, params.role, params.designation. params.salary, params.description, params.link, params.type, params.workdays, params.worktime, params.address, params.experience, params.qualification, params.skills, params.date, params.tags])
    }

    static edit(params){
        return db.query('UPDATE `jobs` SET `category` = ?, `country` = ?, `city` = ?, `title` = ?, `company` = ?, `role` = ?, `designation` = ?, `salary` = ?, `description` = ?, `link` = ?, `type` = ?, `workdays` = ?, `worktime` = ?, `address` = ?, `experience` = ?, `qualification` = ?, `skills` = ?, `date` = ?, `tags` = ? WHERE (`id` = ?)', [params.category, params.country, params.city, params.title, params.company, params.role, params.designation. params.salary, params.description, params.link, params.type, params.workdays, params.worktime, params.address, params.experience, params.qualification, params.skills, params.date, params.tags, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM jobs WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `jobs` SET `status` = ? WHERE id = ?', [params.status, params.id])
    }
}
