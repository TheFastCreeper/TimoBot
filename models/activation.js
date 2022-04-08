import mongoose from "mongoose";

const schema = new mongoose.Schema({
    id: {type: String, required: true,},
    first_name: {type: String, required: true},
    datetime : {type : String, required: true},
    strspm : {type : String, required: true},

});

const ActivationSchema = mongoose.model("activation", schema);
export default ActivationSchema;