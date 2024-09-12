import {JWT_EXPIRE_TIME, JWT_KEY} from "../config/config.js";
import jwt from 'jsonwebtoken';

export const TokenEncode=(email,user_id)=>{

    const KEY=JWT_KEY;
    const EXPIRES={expiresIn: JWT_EXPIRE_TIME}
    const PAYLOAD={email:email,user_id:user_id};
    return jwt.sign(PAYLOAD,KEY,EXPIRES)
}


export const TokenDecode=async(token)=>{
    try{
        return jwt.verify(token,JWT_KEY);

    }
    catch(err){
        return null
    }
}