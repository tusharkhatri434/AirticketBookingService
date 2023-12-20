const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');
const {PORT} = require("./config/serverConfig");
const db = require('./models/index');
const app = express();

const setUpServer = async ()=>{
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes); 

    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
        // if(process.env.DB_sync){
        //     db.sequelize.sync({alert:true});
        // }

    })
    

}
setUpServer();