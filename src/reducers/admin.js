const initialState = {
    panel: "welcome"
}

const adminPanel = (state = initialState, data) => {
    console.log('this is the data stuff for page', data)
    switch(data.type) {
        case 'NavigatePanel':
            return {
                ...state,
                panel: data.data
            }
        default:
            return state
    }
}

export default adminPanel