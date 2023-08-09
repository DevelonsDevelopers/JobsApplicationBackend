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
}
