const express = require('express');
const app = express();
const port = 5000;

//Setting ejs template engine
app.set('view engine', 'ejs');



//Middleware function to check working hours
const checkWorkingHours = (req, res, next) => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();
// Checking if it's monday to friday and between 9am and 5pm
if (currentDay >= 1 && currentDay <= 5 && currentHour < 11){
    next();
} else {
    res.send('Sorry the App is Only Available at Working Hours (Monday to Friday 9 AM to 5 PM)')
}
};
app.use(checkWorkingHours);
//Defining Routes
app.get('/', (req, res) => {
    res.render('Home');
    });

app.get('/Service', (req, res) => {
    res.render('Service');
    });

app.get('/Contact', (req, res) => {
    res.render('Contact');
    });
    

//Starting the Server
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
    });

