const userService = require('../services/userservices'); 
const sendResponse = require('../utils/responsehandler');
const RandomPassword = require('../utils/password');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    try {
        const body = req.body;
        const userdata ={
            "firstName": body.firstName, 
            "lastName": body.lastName,
            "userName" : body.userName.toLowerCase(),
            "mobileNumber": body.mobileNumber,
            "gender": body.gender.toLowerCase(),
            "dob": body.dob,
            "createdBy": body.createdBy,
            "modifiedBy": body.modifiedBy,
            "createdDate" : new Date(),
            "modifiedDate" : new Date()
        }
       
        if (!userdata.firstName) {
            throw new Error('First name is required');
        }

        if (!userdata.lastName) {
            throw new Error('Last name is required');
        }

        if (!userdata.userName) {
            throw new Error('Username is required');
        }

        if (!userdata.mobileNumber || !(/^\d{10}$/.test(userdata.mobileNumber))) {
            throw new Error('Mobile number must be 10 digits');
        }

        if (!userdata.gender || !['male', 'female', 'other'].includes(userdata.gender)) {
            throw new Error('Gender must be male female or other');
        }
        
        const existingUser = await userService.findUserByUsername(userdata.userName);
        if (existingUser) {
            throw new Error('Username already exists');
        }
        const userDob = new Date(body.dob);
        const today = new Date();
        if (userDob > today) {
            throw new Error('Date of birth cannot be after today');
}

        

        
        const newUser = await userService.createUser(userdata);
        
        sendResponse(res, newUser, 'User created successfully');
    } catch (error) {
        sendResponse(res, error, 'Internal Server Error', true);
    }
};


const listUser = async (req, res) => {
    try {
        const userList = await userService.listUser();
        sendResponse(res, userList, 'User list retrieved successfully');
    } catch (error) {
        sendResponse(res, error, 'Internal Server Error', true);
    }
};

const updateUser = async (req, res) => {
    try {
        const userid = req.query.userid;
        const body= req.body;

        const userdata ={
            "firstName": body.firstName, 
            "lastName": body.lastName,
            "mobileNumber": body.mobileNumber,
            "gender": body.gender.toLowerCase(),
            "dob": body.dob, 
            "modifiedBy" : body.modifiedBy|| 'Admin',
            "modifiedDate": new Date()
        }
        if (!userdata.firstName) {
            throw new Error('First name is required');
        }

        if (!userdata.lastName) {
            throw new Error('Last name is required');
        }

        if (!userdata.mobileNumber || !(/^\d{10}$/.test(userdata.mobileNumber))) {
            throw new Error('Mobile number must be 10 digits');
        }

        if (!userdata.gender || !['male', 'female', 'other'].includes(userdata.gender)) {
            throw new Error('Gender must be male female or other');
        }

        const userDob = new Date(body.dob);
        const today = new Date();
        if (userDob > today) {
            throw new Error('Date of birth cannot be after today');
}


        const updatedUser = await userService.updateUser(userid, userdata);
        sendResponse(res, updatedUser, 'User updated successfully');
    } catch (error) {
        sendResponse(res, error, 'Internal Server Error', true);
    }
};

const deleteUser = async (req, res) => {

    try {
        const userId = req.query.userid;
        const userdata = {
            "active" : req.body.active,
            "modifiedDate" : new Date()
        }
        const deletedUser = await userService.deleteUser(userId,userdata);
        sendResponse(res, deletedUser, 'User deleted successfully');
    } catch (error) {
        sendResponse(res, error, 'Internal Server Error', true);
    }
};

const loginUser = async (req, res) => {
    try {
        const userName = req.body.userName;
        const password = req.body.password;

        if (!userName || !password) { // Check both userName and password
            throw new Error('Username and password are required');
        }

        const existingUser = await userService.findUserByUsername(userName);

        if (!existingUser) {
            throw new Error('User not found');
        }
        
    

        if (!existingUser.password) {
            const randomPassword = RandomPassword(6);
           const  updated = await userService.updateUser(existingUser.id, { password: randomPassword });
           sendResponse(res, updated.password, 'This is your new password');
           return;
        }

        if(password == existingUser.password){
            sendResponse(res, existingUser.userName, 'Login successful');  
        }

        else {
            throw new Error(`Invalid password. Your password is: ${existingUser.password}`);
        }
    } catch (error) {
        sendResponse(res, error, 'Authentication failed', true);
    }
};



module.exports = {
    createUser,
    updateUser,
    listUser,
    deleteUser,
    loginUser
};

// if (!user) {
//     throw new Error('User not found');
// }

// if (password !== user.password) {
//     throw new Error('Invalid password');
// }






















// const userservices = require('../services/userservices1')
// const sendResponse = require('../utils/responsehandler')



// const createUser = async (req, res) => {
//     try {
//         const userdata = req.body;

//         if (!userdata.firstName) {
//             throw new Error('First name is required');
//         }

//         if (!userdata.lastName) {
//             throw new Error('Last name is required');
//         }

        

//         // if (isNaN(userdata.age) || userdata.age <= 0 || userdata.age > 99) {
//         //     throw new Error('Age must be a valid number between 1 and 99');
//         // }


        // if (!userdata.gender || !['male', 'female', 'other'].includes(userdata.gender.toLowerCase())) {
        //     throw new Error('Gender must be male female or other');
        // }

//         const data = await userservices.createUser(userdata);
//         sendResponse(res, data, 'User created successfully');
//     } catch (error) {
//         sendResponse(res, error, 'Internal Server Error', true);
//     }
// };



// const listUser = async (req, res) => {
//     try {
//         const userlist = req.body
//         const data = await userservices.listUser(userlist);
//         sendResponse(res, data, 'User list retrieved successfully');
//     } catch (error) {
//         sendResponse(res, error, 'Internal Server Error', true);
//     }
// };



// const updateUser = async (req, res) => {
//     try {
//         const userid = req.query.userid;
//         const body = req.body;

        // const payload ={
        //     "firstName": body.first_name,
        //     "lastName": body.last_name,
        //     "age": body.age,
        //     "gender": body.gender,
            
            
        // }

//         const data = await userservices.updateUser(userid,payload);
//         sendResponse(res, data, 'User updated successfully');
//     } catch (error) {
//         sendResponse(res, error, 'Internal Server Error', true);
//     } 
// };

// const deleteUser = async (req, res) => {
//     try {
//         const userid = req.query.userid;
//         const body = req.body;
//         const payload ={
//             "active":body.active
//         }
//         const data = await userservices.deleteUser(userid,payload);
//         sendResponse(res, data, 'User deleted successfully');
//     } catch (error) {
//         sendResponse(res, error, 'Internal Server Error', true);
//     }
// };


// module.exports = {
//     createUser,
//     updateUser,
//     listUser,
//     deleteUser
// };


