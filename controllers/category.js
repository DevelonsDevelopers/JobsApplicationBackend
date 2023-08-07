const Category = require('../models/category')

exports.getAllCategories = async (req, res, next) => {
    try {
        const [categories] = await Category.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Categories fetched successfully", data: categories});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
