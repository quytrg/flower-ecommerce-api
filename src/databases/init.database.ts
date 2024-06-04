import mongoose from "mongoose";
import { countConnect } from "../helpers/check.connect.helper";

const connectString = "mongodb://127.0.0.1:27017/Kyiv-LuxeBouquets";

let instance: Database | undefined = undefined;

class Database {
    constructor(type: string) {
        if (!instance) {
            instance = this;
            this._connect(type);
        }
        return instance;
    }

    _connect(type: string) {
        mongoose
            .connect(connectString)
            .then(() => {
                countConnect()
                console.log("Database connection successful");
            })
            .catch((err) => {
                console.error("Database connection error");
            });
        if (1 === 1) {
            mongoose
                .set('debug', true)
                .set('debug', { color: true })
        }   
    }

    static getInstance(type='mongodb') {
        if (!instance) {
            instance = new Database(type);
        }
        return instance;
    }
}

const databaseInstance = Database.getInstance('mongodb');
export default databaseInstance;

