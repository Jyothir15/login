

// const sendResponse = (res,data,status = 200,Message ='Success') =>{
//     return res.status(status).json({status,Message,data});
// };


// const sendError = (res,data,status = 400,Message ='internal server error') =>{
//     console.error(error)
//     return res.status(status).json({status,Message,data});
// };

// module.exports =  {sendResponse,sendError};


const sendResponse = (res, data, statusmessage = 'Success', isError = false) => {
    if (isError) {
        return res.status(400).json({ status : 400,msg : statusmessage,errorMsg : data.message });
    }else{
        return res.status(200).json({ status:200, msg : statusmessage, data : data });

    }
    
};

module.exports = sendResponse;


