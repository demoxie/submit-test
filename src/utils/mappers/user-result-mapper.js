import User from "../../model/User.js";

export const GET_ONE = (result)=>{
    if (result?.length === 0){
        return [];
    }else{
        return new User(result[0]?.id, result[0]?.name, result[0]?.email, result[0]?.password)
    }

}
export const GET_ALL = (result)=>{
    console.log(result)
    const users = []
    result?.forEach((user)=>{
        users.push(
            new User(user.id, user.name, user.email, user.password)
        )
    })
    return users
}
