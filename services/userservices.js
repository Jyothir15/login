
const User = require('../schema/userschema');
const {
    createQuery,
    updateQuery,
    listQuery,
    findQuery
} = require('../utils/mongoqueries');


const createUser = async (userData) => {
    try {
        const result = await createQuery(User,userData);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};



const findUserByUsername = async (username) => {
    try {
        const existingUser = await findQuery(User, { userName:  username  });
        return existingUser;
    } catch (error) {
        throw new Error(error.message);
    }
};




const listUser = async () => {
    try {
        const users = await listQuery(User);
        return users;
    } catch (error) {
        throw new Error(error.message);
    }
};



const updateUser = async (userId, userData) => {
    try {
        
        // userData.active = true;
        const updatedUser = await updateQuery(User,userId, userData);
        return updatedUser;
    } catch (error) {
        throw new Error(error.message);
    }
};


const deleteUser = async (userId,userData) => {
    try {
        const deletedUser = await updateQuery(User,userId,userData);
        return deletedUser;
    } catch (error) {
        throw new Error(error.message);
    }
};


// const loginUser = async (userName) => {
//     try {

//         const loggeduser = await findQuery(User,userName);
//         return loggeduser;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };



module.exports = {
    createUser,
    updateUser,
    listUser,
    deleteUser,
    findUserByUsername
};


