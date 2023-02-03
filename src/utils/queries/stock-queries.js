export const INSERT_STOCK = (batchId,quantity) => {
    return `insert into test_db.stock(batch_id, quantity) values(${batchId},${quantity})`
}

export const GET_ALL_STOCKS = "SELECT * FROM `test_db`.`stock`"

export const GET_STOCK_BY_ID = (id)=>{
    return `SELECT * FROM stock WHERE id = ${id}`
}