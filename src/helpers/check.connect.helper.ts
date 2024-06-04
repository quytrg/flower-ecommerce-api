import mongoose from "mongoose";
import os from "os";
import process from "process";

const _SECONDS = 5000;

// count number of connections to mongodb
const countConnect = (): void => {
    const numConnections = mongoose.connections.length;
    console.log('Number of connections: ', numConnections);
}

// check if number of connections to db is overload
const checkOverload = (): void => {
    setInterval(() => {
        const numConnections = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        // assume the maximum number of connections is based on the number of cores 
        const maxConnections = 5 * numCores;

        console.log('Actived connections: ', numConnections);
        console.log(`Memory usage: ${ memoryUsage / 1024 / 1024 } Mb`);

        if (numConnections > maxConnections) {
            console.log('Connection overload detected!!!')
        }
    }, _SECONDS) // monitor every 5 seconds
}

export { countConnect, checkOverload }