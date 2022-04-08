import mongoose from "mongoose";


const mongoConnection = () => {
    mongoose.connect('mongodb+srv://timobot:timobot@cluster0.tmgdx.mongodb.net/timobot?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true
        },
        err => {if(err!=null)console.log(err)}
    );
}

export default mongoConnection;
