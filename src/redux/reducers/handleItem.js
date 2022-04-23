const handleItem = [];

const handleItems = (state = handleItem, action) => {
    switch (action.type) {
        case "ADD_PRODUCT" : return [
            ...state,
            action.payload
        ]
        break;

        case "DELETE_PRODUCT" :
            return state = state.filter((x)=>{
                return x.id !== Number(action.payload.id)
            })
        break;

        default: return state;
        break;

        
    }
}

export default handleItems;