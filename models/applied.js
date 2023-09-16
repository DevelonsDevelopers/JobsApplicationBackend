const db = require('../util/database')

module.exports = class Applied {
    constructor(id, job, user, data, proposal) {
        this.id = id;
        this.job = job;
        this.user = user;
        this.data = data;
        this.proposal = proposal;
    }

    static fetchAll(){
        return db.query('SELECT applied.id, applied.date, applied.proposal, seekers.name, seekers.username, seekers.email, seekers.phone, seekers.address, jobs.id as job, jobs.title, jobs.role, jobs.type, jobs.salary, jobs.experience, jobs.qualification FROM applied INNER JOIN jobs on jobs.id = applied.job INNER JOIN seekers ON seekers.id = applied.user')
    }

    static fetchCompany(params){
        return db.query('SELECT applied.id, applied.date, applied.proposal, seekers.id as user,  seekers.name, seekers.username, seekers.email, seekers.phone, seekers.address FROM applied INNER JOIN jobs on jobs.id = applied.job INNER JOIN seekers ON seekers.id = applied.user WHERE jobs.company = ?', [params.company])
    }

    static fetchByUser(params){
        return db.query('SELECT applied.id, applied.date, applied.proposal, applied.response, seekers.name, seekers.username, seekers.email, seekers.phone, seekers.address, jobs.id as job, jobs.title, jobs.role, jobs.type, jobs.salary, jobs.experience, jobs.qualification, jobs.company, companies.name as company_name FROM applied INNER JOIN jobs on jobs.id = applied.job INNER JOIN companies ON companies.id = jobs.company INNER JOIN seekers ON seekers.id = applied.user WHERE applied.user = ?', [params.user])
    }

    static fetchByID(params){
        return db.query('SELECT applied.id, applied.date, applied.proposal, applied.response, seekers.name, seekers.username, seekers.email, seekers.phone, seekers.address, jobs.id as job, jobs.title, jobs.role, jobs.type, jobs.salary, jobs.experience, jobs.qualification FROM applied INNER JOIN jobs on jobs.id = applied.job INNER JOIN seekers ON seekers.id = applied.user WHERE applied.id = ?', [params.id])
    }

    static fetchByJob(params){
        return db.query('SELECT applied.id, applied.date, applied.proposal, applied.response, seekers.name, seekers.username, seekers.email, seekers.phone, seekers.address, jobs.id as job, jobs.title, jobs.role, jobs.type, jobs.salary, jobs.experience, jobs.qualification FROM applied INNER JOIN jobs on jobs.id = applied.job INNER JOIN seekers ON seekers.id = applied.user WHERE applied.job = ?  AND applied.user = ?', [params.job, params.user])
    }

    static post(params){
        return db.query('INSERT INTO `job_application`.`applied` (`job`, `user`, `date`, `proposal`) VALUES (?, ?, ?, ?)', [params.job, params.user, params.date, params.proposal])
    }

    static edit(params){
        return db.query('UPDATE `applied` SET `job` = ?, `user` = ?, `date` = ?, `proposal` = ? WHERE (`id` = ?)', [params.job, params.user, params.date, params.proposal, params.id])
    }

    static delete(params){
        return db.query('DELETE FROM applied WHERE id = ?', [params.id])
    }

    static status(params){
        return db.query('UPDATE `applied` SET `status` = ? WHERE (`id` = ?)', [params.status, params.id])
    }
}
