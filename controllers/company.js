const Company = require('../models/company')
const Category = require("../models/category");

exports.getAllCompanies = async (req, res, next) => {
    try {
        const [companies] = await Company.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Company fetched successfully", data: companies});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getCompanyByID = async (req, res, next) => {
    try {
        const [[company]] = await Company.fetchByID(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Company fetched successfully", data: company});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createCompany = async (req, res, next) => {
    try {
        const [company] = await Company.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Company created successfully", data: company});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateCompany = async (req, res, next) => {
    try {
        const [company] = await Company.edit(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Company updated successfully", data: company});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.completeCompany = async (req, res, next) => {
    try {
        const [company] = await Company.complete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Company completed successfully", data: company});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteCompany = async (req, res, next) => {
    try {
        const [company] = await Company.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Company deleted successfully", data: company});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.statusCompany = async (req, res, next) => {
    try {
        const [company] = await Company.status(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Status changed successfully", data: company});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
