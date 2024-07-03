import chalk from 'chalk';
import mongoose from 'mongoose';
import { configuration } from '../constants.js';

const connectDB = async () => {
    try {
        const connetionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${configuration?.DB_NAME}`);
        console.log(chalk.greenBright(`\nMongodb connected !! DB host: ${connetionInstance.connection.host}`))
    } catch (error) {
        console.log('MONGODB connection failed', error)
        process.exit(1)
    }
}

export default connectDB;