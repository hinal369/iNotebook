const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongo = ()=>{
    try {
        mongoose.connect(mongoURI, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
            family : 4
        })
        .then(() => console.log('Connected!'));
    } catch (error) {
        console.log(error);   
    }
}

module.exports = connectToMongo;