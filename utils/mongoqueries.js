

const createQuery = async (User,userData) => {
    try {
        const newUser = new User(userData);
        const result = await newUser.save();
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

const listQuery = async (User) => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateQuery = async (User,userId, userData) => {
    try {
        

        console.log(userData)
        const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
        return updatedUser;
    } catch (error) {
        throw new Error(error.message);
    }
};


const findQuery = async (User, query) => {
    try {
        const findusers = await User.findOne(query);
        return findusers;
    } catch (error) {
        throw new Error(error.message);
    }
};



module.exports = {
    createQuery,
    updateQuery,
    listQuery,
    findQuery,
    
};





// const findbyId = async (userId) => {
//     try {
//         const user = await User.findById(userId);
//         return user;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };