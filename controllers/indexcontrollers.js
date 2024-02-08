
const indexServices = require('../services/indexservices');
const sendResponse = require('../utils/responsehandler');

const indexcontrollers = (req, res) => {
    try {
        const data = indexServices();
        sendResponse(res,  data,'data send Success');
    } catch (error) {
        sendResponse(res, error, 'Internal Server Error', true);
    }
};

module.exports = {
    indexcontrollers
};




// const usercontrollers = (req, res) => {
//     try {
//         const data = indexServices();
//         sendResponse(res, data);
//     } catch (error) {
//         sendResponse(res, error, 400, 'Internal Server Error', true);
//     }
// };






















