const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({

//     firstName: String,
//     lastName: String,
//     userName: { type: String, unique: true },
//     password: String,
//     mobileNumber : Number,
//     gender: String,
//     dob: Date,
//     active: { type: Boolean, default: true },
//     lastLogin: { type: Date,required : false },
//     createdBy: {String},
//     createdDate: { type: Date,required : false },
//     modifiedBy: { type: String, default: 'Admin' },
//     modifiedDate: { type: Date, default: Date.now,required : false }
// });

// module.exports =  mongoose.model('User', userSchema);





const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },

    lastName: { type: String, required: true,  },
    userName: { type: String, unique: true, required: true },
    password: { type: String,},
    mobileNumber: { type: Number, required: true,  },
    gender: { type: String, required: true },
    dob: { type: Date, required: true,select: false },
    active: { type: Boolean, default: true },
    lastLogin: { type: Date, select: false}, // Set select: false to hide from queries
    createdBy: { type: String ,default : 'Admin', select: false},
    createdDate: { type: Date, select: false },
    modifiedBy: { type: String,default : 'Admin',  },
    modifiedDate: { type: Date,default: Date.now, }
});

module.exports =  mongoose.model('User', userSchema);































// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true
//     },
//     lastName: {
//         type: String,
//         required: true
//     },
//     age: {
//         type: Number,
//         required: true
//     },
//     gender: {
//         type: String,
//         // enum: ['Male', 'Female', 'Other'],
//         required: true
//     },
//     active: {
//         type: Boolean,
//         default: true
//     },
//     created: {
//         type: Date,
//         default: Date.now
//     },
//     createdBy: {
//         type: String,
//         required: true
//     },
//     modifiedBy: {
//         type: String,
//         required: true
//     },
//     modified: {
//         type: Date,
//         default: Date.now
//     }
// });

// module.exports = mongoose.model('User', UserSchema);


