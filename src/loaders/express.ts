import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const express_app = express();
express_app.use(cors());
express_app.use(bodyParser.urlencoded({extended:false}));
express_app.use(bodyParser.json())

export default express_app;