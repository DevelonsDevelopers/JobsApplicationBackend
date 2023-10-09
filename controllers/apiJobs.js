const ApiJobs = require('../models/apiJobs')

exports.getAllApiJobs = async (req, res, next) => {
    try {
        const [apiJobs] = await ApiJobs.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "API Jobs fetched successfully", data: apiJobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllApiJobsData = async (req, res, next) => {
    try {
        const [apiJobs] = await ApiJobs.fetchAllJobs(req.body)
        res.status(200).json({ "responseCode": 200, "message": "API Jobs fetched successfully", data: apiJobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getJob = async (req, res, next) => {
    try {
        const [[apiJobs]] = await ApiJobs.fetchByID(req.body)
        res.status(200).json({ "responseCode": 200, "message": "API Job fetched successfully", data: apiJobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.addApiJobs = async (req, res, next) => {
    try {
        const [apiJobs] = await ApiJobs.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "API Jobs added successfully", data: apiJobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
