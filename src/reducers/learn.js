const initialState = {
        packages: [
            {
        title: '',
        description: '',
        price: '',
        link: ''
            }
        ]
}


    const learningPackages = (state = initialState, data) => {
        switch(data.type){
            case 'NewPackages':
                return {
                    packages: data.data
                }
            default:
                return state
        }
    }

    export default learningPackages;