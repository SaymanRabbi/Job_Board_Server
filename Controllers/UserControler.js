const { AllUserServices } = require("../Services/UserServices");

const AllUser = async (req, res,next) => {
    try {
        const data= AllUserServices()
        res.status(200).json({
            status: 'success',
            data
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    AllUser
}