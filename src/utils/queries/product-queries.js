export const GET_ALL_PRODUCTS = "SELECT * FROM `test_db`.`product`"

export const GET_PRODUCT_BY_ID = (id)=>{
    return `SELECT * FROM test_db.product WHERE id = ${id}`
}
export const INSERT_PRODUCT = (name, category, size, price, quantity, description,createdAt) => {
    return `insert into test_db.product(name, category, size, price, quantity, description, createdAt) values('${name}','${category}','${size}',${price},${quantity},'${description}',${createdAt})`
}

export const UPDATE = (id, name, price, description) => {
    return `UPDATE test_db.product SET name='${name}', price='${price}', description='${description}' WHERE id=${id}`
}