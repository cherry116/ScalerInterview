const express = require("express");
const cors = require('cors')

const interviewRoutes = require("./routes/interview.route");
const userRoutes = require("./routes/user.route")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/interview", interviewRoutes);
app.use("/api/user", userRoutes);
app.use("*", (req, res, next) => {
    return res.json({
        message: "Route does not exist"
    });
});

module.exports = app;