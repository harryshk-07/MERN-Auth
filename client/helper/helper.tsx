import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import Cookies from 'js-cookie';

// import jwt_decode from 'jwt-decode';


/** Make API Requests */


/** To get username from Token */
export async function getUsername(){
    const token = localStorage.getItem('token')
    if(!token) return Promise.reject("Cannot find Token");
    let decode = jwtDecode(token)
    return decode;
}

// export async function getUsername(){
//     const token = localStorage.getItem('token')
//     if(!token) return Promise.reject("Cannot find Token");
//     let decode = jwt_decode(token)
//     return decode;
// }

/** authenticate function */
export async function authenticate(username:any){
    try {
        return await axios.post('http://localhost:5000/api/authenticate', { username })
    } catch (error) {
        return { error : "Username doesn't exist...!"}
    }
}

/** get User details */
export async function getUser({ username }:any){
    try {
        const { data } = await axios.get(`http://localhost:5000/api/user/${username}`);
        return { data };
    } catch (error) {
        return { error : "Password doesn't Match...!"}
    }
}

/** register user function */
export async function registerUser(credentials:any){
    try {
        const { data : { msg }, status } = await axios.post(`http://localhost:5000/api/register`, credentials);

        let { username, email } = credentials;

        /** send email */
        if(status === 201){
            await axios.post('http://localhost:5000/api/registerMail', { username, userEmail : email, text : msg})
        }

        return Promise.resolve(msg)
    } catch (error) {
        return Promise.reject({ error })
    }
}

/** login function */
// export async function verifyPassword({ username, password }:any){
//     try {
//         if(username){
//             const { data } = await axios.post('http://localhost:5000/api/login', { username, password })
//             return Promise.resolve({ data });
//         }
//     } catch (error) {
//         return Promise.reject({ error : "Password doesn't Match...!"})
//     }
// }

export async function verifyPassword({ username, password }: any) {
    try {
      if (username) {
        const { data } = await axios.post('http://localhost:5000/api/login', { username, password });
  
        if (data.token) {
          // Store the token in cookies
          Cookies.set('token', data.token);
  
          // Decode the token if needed
          let decodedToken = jwtDecode(data.token);
  
          return Promise.resolve({ data, decodedToken });
        }
      }
    } catch (error) {
      return Promise.reject({ error: "Password doesn't Match...!" });
    }
  }

/** update user profile function */
export async function updateUser(response:any){
    try {
        
        const token = await localStorage.getItem('token');
        const data = await axios.put('http://localhost:5000/api/updateuser', response, { headers : { "Authorization" : `Bearer ${token}`}});

        return Promise.resolve({ data })
    } catch (error) {
        return Promise.reject({ error : "Couldn't Update Profile...!"})
    }
}

/** generate OTP */
export async function generateOTP(username:any){
    try {
        const {data : { code }, status } = await axios.get('http://localhost:5000/api/generateOTP', { params : { username }});

        // send mail with the OTP
        if(status === 201){
            let { data : { email }} = await getUser({ username });
            let text = `Your Password Recovery OTP is ${code}. Verify and recover your password.`;
            await axios.post('http://localhost:5000/api/registerMail', { username, userEmail: email, text, subject : "Password Recovery OTP"})
        }
        return Promise.resolve(code);
    } catch (error) {
        return Promise.reject({ error });
    }
}

/** verify OTP */
export async function verifyOTP({ username, code }:any){
    try {
       const { data, status } = await axios.get('http://localhost:5000/api/verifyOTP', { params : { username, code }})
       return { data, status }
    } catch (error) {
        return Promise.reject(error);
    }
}

/** reset password */
export async function resetPassword({ username, password }:any){
    try {
        const { data, status } = await axios.put('http://localhost:5000/api/resetPassword', { username, password });
        return Promise.resolve({ data, status})
    } catch (error) {
        return Promise.reject({ error })
    }
}