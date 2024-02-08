const createauth = () => {
    console.log('Creating auth...');
    return 'hi from create auth';
    
};


const loginauth = () => {
    console.log('login auth');
    return 'hi from login auth';
    
};

const forgotpasswordauth = () => {
    console.log('Updating user...');
    return 'hi from forgotpassword auth';
    
};




module.exports = {
    createauth,
    loginauth,
    forgotpasswordauth,

};
