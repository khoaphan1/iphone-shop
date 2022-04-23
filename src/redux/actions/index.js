export const addItem = (product) => {
    return {
        type : "ADD_PRODUCT",
        payload : product
    }
}

export const delItem = (product) => {
    return {
        type : "DELETE_PRODUCT",
        payload : product
    }
}