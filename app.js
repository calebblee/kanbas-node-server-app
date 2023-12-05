import express from 'express';
import HeLLo from './hello.js';
import Lab5 from './Lab5.js';
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import UserRoutes from "./users/routes.js";
import mongoose from "mongoose";
import session from "express-session";
import "dotenv/config";

const CONNECTION_STRING = "mongodb+srv://caleblee12694:9261492614popo@cluster0.a8zioqh.mongodb.net/?retryWrites=true&w=majority" || 'mongodb://127.0.0.1:27017/kanbas'
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}
));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));

app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
Lab5(app);
HeLLo(app);
app.listen(process.env.PORT || 4000);