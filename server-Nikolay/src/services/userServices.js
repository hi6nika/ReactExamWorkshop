const User = require("../mongoose/models/user");

exports.register = async (data) => {


 
    
   const user = await User.create(data);
 
 
    return user;


};
