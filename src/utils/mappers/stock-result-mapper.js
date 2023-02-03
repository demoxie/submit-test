import Stock from "../../model/Stock.js";

export const GET_ALL = (result)=>{
    return result?.map(stock=>{
        return new Stock(stock.batch_id,stock.quantity,stock.created_at,stock.updated_at)
    })
}

export const GET_ONE = (result)=>{
    if (result){
        return new Stock(result[0]?.batch_id,result[0]?.quantity,result[0]?.created_at,result[0]?.updated_at)
    }
    return []

}