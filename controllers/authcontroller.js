const authservices = require('../services/authservices')
const sendResponse = require('../utils/responsehandler')
const createauth = (req, res) => {
    try {
        const data = authservices.createauth();
        sendResponse(res,  data,'auth Successful');
    } catch (error) {
        sendResponse(res, error, 'Internal Server Error', true);
    }

};

const loginauth = (req, res) => {
    try {
        const data = authservices.loginauth();
        sendResponse(res,  data,'login Success');
    } catch (error) {
        sendResponse(res, error, 'Internal Server Error', true);
    }

};

const forgotpasswordauth = (req, res) => {
    try {
        const data = authservices.forgotpasswordauth();
        sendResponse(res,  data,'password changed ');
    } catch (error) {
        sendResponse(res, error, 'Internal Server Error', true);
    }
    
};


module.exports = {
    createauth,
    loginauth,
    forgotpasswordauth,

};
