const {BookingService} = require("../services/index");
const { StatusCodes } = require('http-status-codes');

const bookingService = new BookingService();
const create  = async (req,res) => {
    try {
        const response = await bookingService.createBooking(req.body);
        return res.status(StatusCodes.OK).json({
            data:response,
            success:false,
            message:"Successfully created",
            err:{}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Something went wrong",
            err:error
        })
    }
}

module.exports = {
    create
}