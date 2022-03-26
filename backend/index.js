const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path:'./config.env'})
const app = require("./app");


mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("DB connected");
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});