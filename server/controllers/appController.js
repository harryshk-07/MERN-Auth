import bcrypt from "bcrypt"
import UserModel from "../models/User.model.js"
import jwt from "jsonwebtoken";
import ENV from "../config.js"
import otpGenerator from 'otp-generator';


export const verifyUser = async (req, res, next) => {
    try {
        
        const { username } = req.method == "GET" ? req.query : req.body;

        // check the user existance
        let exist = await UserModel.findOne({ username });
        if(!exist) return res.status(404).send({ error : "Can't find User!"});
        next();

    } catch (error) {
        return res.status(404).send({ error: "Authentication Error"});
    }
}

// POST REQUEST

// OLD METHOD
// export const register = async (req,res)=>{
//     try {
//         const { username, password, profile, email } = req.body;        
//         console.log(req.body)

//         const existUsername = new Promise((resolve, reject) => {
//             UserModel.findOne({ username })
//               .then((user) => {
//                 if (user) {
//                   // If username exists, reject the promise with an error
//                   reject({ error: "Please use a unique username" });
//                 } else {
//                   console.log("existUsername");
//                   // If username doesn't exist, resolve the promise
//                   resolve();
//                 }
//               })
//               .catch((err) => {
//                 // If there is any error during the database query, reject the promise with an error
//                 reject(new Error(err));
//               });
//           });

//         const existEmail = new Promise((resolve, reject) => {
//             UserModel.findOne({ email })
//               .then((foundEmail) => {
//                 if (foundEmail) {
//                   // If email exists, reject the promise with an error
//                   reject({ error: "Please use a unique email" });
//                 } else {
//                   console.log("existEmail");
//                   // If email doesn't exist, resolve the promise
//                   resolve();
//                 }
//               })
//               .catch((err) => {
//                 // If there is any error during the database query, reject the promise with an error
//                 reject(new Error(err));
//               });
//           });
          


//         Promise.all([existUsername, existEmail])
//             .then(() => {
//                 if(password){
//                     bcrypt.hash(password, 10)
//                         .then( hashedPassword => {
                            
//                             const user = new UserModel({
//                                 username,
//                                 password: hashedPassword,
//                                 profile: profile || '',
//                                 email
//                             });

//                             // return save result as a response
//                             user.save()
//                                 .then(result => res.status(201).send({ msg: "User Register Successfully"}))
//                                 .catch(error => res.status(500).send({error}))

//                         }).catch(error => {
//                             return res.status(500).send({
//                                 error : "Enable to hashed password"
//                             })
//                         })
//                 }
//             }).catch(error => {
//                 console.log(error)
//                 return res.status(500).send({ error })
//             })


//     } catch (error) {
//         return res.status(500).send(error);
//     }
// }

// NEW METHOD
export const register = async (req, res) => {
    try {
        const { username, password, profile, email } = req.body;

        // Check for existing username
        const existingUsername = await UserModel.findOne({ username });
        if (existingUsername) {
            return res.status(400).send({ error: "Please use a unique username" });
        }

        // Check for existing email
        const existingEmail = await UserModel.findOne({ email });
        if (existingEmail) {
            return res.status(400).send({ error: "Please use a unique email" });
        }

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = new UserModel({
                username,
                password: hashedPassword,
                profile: profile || '',
                email,
            });

            // Save the user and handle the result
            const result = await user.save();
            return res.status(201).send({ msg: "User Register Successfully" });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal Server Error" });
    }
}

// POST REQUEST
export const login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await UserModel.findOne({ username });
  
      if (!user) {
        return res.status(404).send({ error: "Username not found" });
      }
  
      const passwordCheck = await bcrypt.compare(password, user.password);
  
      if (!passwordCheck) {
        return res.status(400).send({ error: "Password does not match" });
      }
  
      // Create JWT token
      const token = jwt.sign(
        {
          userId: user._id,
          username: user.username,
        },
        ENV.JWT_SECRET,
        { expiresIn: "24h" }
      );
  
      return res.status(200).send({
        msg: "Login Successful",
        username: user.username,
        token,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: "Internal Server Error" });
    }
  };

// GET REQUEST
export const getUser = async (req,res)=>{
    const { username } = req.params;

try {
    if (!username) {
        return res.status(501).send({ error: "Invalid Username" });
    }

    const user = await UserModel.findOne({ username });

    if (!user) {
        return res.status(501).send({ error: "Couldn't Find the User" });
    }

    // Remove password from user
    const { password, ...rest } = user.toJSON();

    return res.status(201).send(rest);
} catch (error) {
    console.error(error);
    return res.status(404).send({ error: "Cannot Find User Data" });
}
}
// PUT REQUEST

export const updateUser = async (req, res) => {
    try {
        const { userId } = req.user;

        if (!userId) {
            return res.status(401).send({ error: "User Not Found...!" });
        }

        const body = req.body;

        // Update the data
        const updateResult = await UserModel.findOneAndUpdate({ _id: userId }, body, { new: true });

        if (updateResult) {
            return res.status(201).send({ msg: "Record Updated...!" });
        } else {
            return res.status(500).send({ error: "Failed to update record" });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal Server Error" });
    }
};

// GET REQUEST
export const generateOTP = async (req,res)=>{
    req.app.locals.OTP = await otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false})
    res.status(201).send({ code: req.app.locals.OTP })
}
// GET REQUEST
export const verifyOTP = async (req,res)=>{
    const { code } = req.query;
    if(parseInt(req.app.locals.OTP) === parseInt(code)){
        req.app.locals.OTP = null; // reset the OTP value
        req.app.locals.resetSession = true; // start session for reset password
        return res.status(201).send({ msg: 'Verify Successsfully!'})
    }
    return res.status(400).send({ error: "Invalid OTP"});
}
// GET REQUEST
export const createResetSession = async (req,res)=>{
    if(req.app.locals.resetSession){
        return res.status(201).send({ flag : req.app.locals.resetSession})
   }
   return res.status(440).send({error : "Session expired!"})
}
// PUT REQUEST
export const resetPassword = async (req,res)=>{
    try {
        if (!req.app.locals.resetSession) {
            return res.status(440).send({ error: "Session expired!" });
        }

        const { username, password } = req.body;

        try {
            const user = await UserModel.findOne({ username });

            if (!user) {
                return res.status(404).send({ error: "Username not found" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            await UserModel.updateOne(
                { username: user.username },
                { password: hashedPassword }
            );

            req.app.locals.resetSession = false; // Reset session
            return res.status(201).send({ msg: "Record Updated...!" });

        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: "Internal Server Error" });
        }

    } catch (error) {
        return res.status(401).send({ error });
    }
}