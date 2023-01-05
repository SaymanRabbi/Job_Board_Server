const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv').config();

// middleware
app.use(cors());
app.use(express.json());
