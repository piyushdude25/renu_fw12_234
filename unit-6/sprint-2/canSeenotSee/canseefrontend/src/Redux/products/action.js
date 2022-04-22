export const GET_PRODUCTS="GET_PRODUCTS";
export const GET_PRODUCTS_LOADING="GET_PRODUCTS_LOADING";
export const GET_PRODUCTS_ERROR="GET_PRODUCTS_ERROR";

export const getproducts=()=>({
    type:GET_PRODUCTS,
    payload
});
export const getproductsloading=()=>({
    type:GET_PRODUCTS_LOADING,
    
});
export const getproductserror=()=>({
    type:GET_PRODUCTS_ERROR,
    
});