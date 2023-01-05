const express = require('express');
const cors = require('cors');
const  connectDB  = require('./Server');
const { ErrorHandeler } = require('./Middleware/ErrorHandeler');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const UserRoutes = require('./Routes/UserRoutes');
// middleware
app.use(cors());
app.use(express.json());
/* start the server */
connectDB()
/*-------Routes------------*/
app.use('/api/v1/user',UserRoutes);
/*-------Routes------------*/


/*Home Route*/
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to the Home Page'
    });
})
/*Lising to the port*/
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
/*existing nothitng*/
app.all('*', (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req?.originalUrl} on this server!`
    });
})
/*error handeler*/
app.use(ErrorHandeler);