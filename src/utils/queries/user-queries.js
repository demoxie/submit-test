export const GET_ALL_USERS = "SELECT * FROM `test_db`.`user`"
export const GET_USER_BY_EMAIL = (email)=>{
    return `SELECT * FROM test_db.user WHERE email = '${email}'`
}

export const GET_USER_BY_ID = "SELECT * FROM test_db.user WHERE id=:id"

export const INSERT = (name, email, password) => {
    return `INSERT INTO test_db.user (name, email, password) VALUES ('${name}', '${email}', '${password}')`
}