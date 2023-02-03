import connection from '../config/db.js'
import {GET_ALL, GET_ONE} from "../utils/mappers/user-result-mapper.js"
import {GET_ALL_USERS, GET_USER_BY_EMAIL, GET_USER_BY_ID, INSERT} from "../utils/queries/user-queries.js";
import bcrypt from "bcrypt";
import {generateToken} from "../middlewares/auth.js";

     const findById = (req,res,next)=>{
         connection.query(
             GET_USER_BY_ID+req.params.id,(err, result)=>{
                 if (err){
                     console.error("Error: ",err)
                 }
                 res.body.data(Mapper.GET_ONE(result))
             }
         );
         return next()
     }
    const findByAll= async (req,res,next)=>{
        try {

            connection.query(GET_ALL_USERS, (err, result) => {
                res.status(200).send({status: 200, message: 'success', data: GET_ALL(result)})
            });
        } catch (e) {
            console.error(e)
        }

    }
    const create = (req,res,next)=>{
        const {name, email, password} = req.body
        const hashedPassword = bcrypt.hashSync(password, 10)
        connection.query(
            INSERT(name, email, hashedPassword),
            (err, result) => {
                if (err){
                    console.error("Error: ",err)
                }
                res.status(200).send({status:200, message: 'success', data: result})
            }
        );
    }
    const login = (req,res,next)=>{
        const {email, password} = req.body
        connection.query(
            GET_USER_BY_EMAIL(email),
            (err, result) => {
                if (err){
                    console.error("Error: ",err)
                }
                if (result?.length === 0){
                    res.status(404).send({status: 404, message: 'User not found'})
                }
                const user = GET_ONE(result)

                if (bcrypt.compareSync(password, user.password)){
                    const token = generateToken(user)
                    res.status(200).send({status: 200, message: 'success', data: {
                        token: token,
                        user: user
                        }})
                }else {
                    res.status(401).send({status: 401, message: 'Unauthorized'})
                }
            }
        );
    }

export default {
    findById,
    findByAll,
    create,
    login
};