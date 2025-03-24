import "./helper/config.env.js";
import connectDB from "./db/index.db.js";
import app from "./app.js";

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server Running On ${process.env.PORT}`);
        });
    })
    .catch((e) => {
        console.log(`Database Connection Error: ${e}`);
    })