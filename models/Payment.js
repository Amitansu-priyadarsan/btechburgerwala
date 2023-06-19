import mongoose from "mongoose";

const schema = new mongoose.Schema({

    razorpay_order_id : {
        type: String,
        require : true,
    },
    razorpay_payment_id : {
        type: String,
        require : true,
    },
    razorpay_signature : {
        type: String,
        require : true,
    },

    createAt : {
        type: String,
        default:Date.now,
    }
});


export const Payment = mongoose.model("Payment ",schema);
