import getPrismaClient from "../libs/prisma.libs.js";

const prima = getPrismaClient();

const connectDB = async () => {
    try {
        await prima.$connect();
        console.log("Prisma Connected.");
    } catch (error) {
        console.log(`Error In Connecting To Prisma - ${error}`);
        process.exit(1);
    }
};

export default connectDB;