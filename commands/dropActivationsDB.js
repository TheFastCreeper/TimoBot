import bot from "../bot.js";
import mongoose from "mongoose";
import {MongoClient} from "mongodb";

const dropactivationsdb = async () => {
    bot.command('dropactivationsdb', async (ctx) => {
        const mongo = MongoClient;
        const url = 'mongodb+srv://timobot:timobot@cluster0.tmgdx.mongodb.net/timobot?retryWrites=true&w=majority'
        let db, jobs

        mongo.connect(
            url,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err, client) => {
                if (err) {
                    console.error(err)
                    return
                }
                db = client.db('timobot')
                jobs = db.collection('activations')

                jobs.deleteMany({})
            }
        )
    });
}

export default dropactivationsdb;