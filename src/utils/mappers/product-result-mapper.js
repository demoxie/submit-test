import Product from "../../model/Product.js";

export const GET_ALL = (result)=>{
    return result?.map((product)=>{
        return new Product(product.id, product.name, product.category, product.size, product.price, product.quantity, product.description, product.createAt, product.updatedAt);
    });
}

export const GET_ONE = (result)=>{
    if (result?.length === 0){
        return [];
    }else{
        return new Product(result[0].id, result[0].name, result[0].category, result[0].size, result[0].price, result[0].quantity, result[0].description, result[0].createAt, result[0].updatedAt);
    }
}