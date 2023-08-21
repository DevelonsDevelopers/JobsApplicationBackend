const Seeker = require('../models/seeker')

exports.getAllSeeker = async (req, res, next) => {
    try {
        const [seeker] = await Seeker.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Seekers fetched successfully", data: seeker});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getSeekerByID = async (req, res, next) => {
    try {
        const [[seeker]] = await Seeker.fetchByID(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Seeker fetched successfully", data: seeker});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createSeeker = async (req, res, next) => {
    try {
        const [seeker] = await Seeker.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Seeker created successfully", data: seeker});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateSeeker = async (req, res, next) => {
    try {
        const [seek] = await Seeker.edit(req.body)
        if (seek){
            const [[seeker]] = await Seeker.fetchByID(req.body)
            res.status(200).json({ "responseCode": 200, "message": "Seeker updated successfully", data: seeker});
        } else {
            res.status(200).json({ "responseCode": 200, "message": "Seeker updated successfully", data: null});
        }

    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteSeeker = async (req, res, next) => {
    try {
        const [seeker] = await Seeker.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Seeker deleted successfully", data: seeker});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.statusSeeker = async (req, res, next) => {
    try {
        const [seeker] = await Seeker.status(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Status changed successfully", data: seeker});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
