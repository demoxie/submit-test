import connection from "../config/index.js";
import {GET_ALL, GET_ONE} from "../utils/mappers/stock-result-mapper.js";
import {GET_ALL_STOCKS, GET_STOCK_BY_ID, INSERT_STOCK} from "../utils/queries/stock-queries.js";

const createStock = async (req, res) => {
    const { batchId, quantity} = req.body;

    try {
        connection.query(
            INSERT_STOCK(batchId, quantity),
            (err,result)=>{
                res.status(201).send({status: 201, message: "Stock Added successfully",data: result})
            }
        )
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const findAll = async (req, res) => {
    try {
        connection.query(GET_ALL_STOCKS, (err, result) => {
            res.status(200).send({ status: 200, message: 'success', data: GET_ALL(result) })
        })

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const findById = (req,res,next)=>{
    try {
        const id = req.params.id
        connection.query(
            GET_STOCK_BY_ID(id),
            (err, result)=>{
                res.status(200).send(
                    {
                        status: 200,
                        message: "success",
                        data: GET_ONE(result)
                    }
                )
            }
        )
    }catch (e) {
        console.error(e)
        res.status(500).send(e)
    }
}
export default {
    createStock,
    findAll,
    findById
}