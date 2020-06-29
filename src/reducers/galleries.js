const initialState = {
    siteImages: []
}

const getGalleries = (state = initialState, galleries) => {
    console.log('this is galleries', galleries.data)
    switch(galleries.type){
        case 'NewGalleries':
            return {
                siteImages: galleries.data
            }
    default:
        return state
    }
}

export default getGalleries