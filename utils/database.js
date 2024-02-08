const mongoose = require('mongoose');
const dburi = 'mongodb://localhost:27017/nextdatabase';


const connectdb = async () => { 
    try
    { await mongoose.connect(dburi);

console.log('connected to mongoDB')}

catch(err){ 

    console.error('error connected to mongoDB')

}
};

module.exports = connectdb;

