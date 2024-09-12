import UsersModel from "../model/UsersModel.js";
import {json} from "express";
import {TokenEncode} from "../utility/tokenUtility.js";

export const Registration= async (req, res) => {
    try{
        let reqBody = req.body;
        await UsersModel.create(reqBody)
        return res.json({status: "success",msg: "User registered successfully"})
    }
    catch(err){
        return res.json({status:"error",msg:err.toString()})
    }
}
export const login = async (req, res) => {
    try{
        let reqBody = req.body;
        let data=await UsersModel.findOne(reqBody)
        if(data==null){
            return res.json({status:"error",msg:"User does not exist"})
        }
        else{
            let token=TokenEncode(data["email"],data["_id"])
            return res.json({status:"success",token:token})
        }
    }
    catch(err){
        return res.json({status:"error",msg:err.toString()})
    }
}
export const PrfileDetails= async (req, res) => {
    try {
        let user_id=req.headers['user_id']
        let data=await UsersModel.findOne({"_id":user_id})
        return res.json({status:"success",msg:"Users Profile Succesfull",data:data})
    }
    catch (err){
        return res.json({status:"error",msg:err.toString()})
    }
}
export const ProfileUpdate= async (req, res) => {
    return res.json({"status":"success"})
}
export const EmailVarify= async (req, res) => {
    return res.json({"status":"success"})
}
export const CodeVarify= async (req, res) => {
    return res.json({"status":"success"})
}
export const ResetPassword= async (req, res) => {
    return res.json({"status":"success"})
}