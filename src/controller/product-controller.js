import {GET_ALL_PRODUCTS, INSERT_PRODUCT} from "../utils/queries/product-queries.js";
import connection from "../config/index.js";
import {GET_ALL} from "../utils/mappers/product-result-mapper.js";

const createProduct = async (req, res) => {
    const { name, category, size, price, quantity, description} = req.body;

    try {
        connection.query(
            INSERT_PRODUCT(name, category, size, price, quantity, description, "NOW()"),
            (err,result)=>{
                res.status(201).send({status: 201, message: "Product Added successfully",data: result})
            }
        )
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const findAll = async (req, res) => {
    try {
        connection.query(GET_ALL_PRODUCTS, (err, result) => {
            res.status(200).send({ status: 200, message: 'success', data: GET_ALL(result) })
        })

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}
export default {
    createProduct,
    findAll
}