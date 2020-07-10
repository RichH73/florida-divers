const initial_state = {
    gallery_name: '',
    new_album: Boolean,
    album_description: '',
    photos: [],
    save_files: [],
    files: []
}

const gallery_uploader = (state = initial_state, photo_data) => {
    switch(photo_data.type) {
        case 'new_gallery':
            return {
                ...state,
                photos: [...photo_data.photos],
                save_files: [...photo_data.save_files]
            }

        case "delete_album_photos":
            return {
                ...photo_data,
                photos: state.photos.filter(photo => photo.path !== photo_data.path),
                save_files: state.save_files.filter(photo => photo.path !== photo_data.path),
                //image_array: state.image_array.filter(image => image.path !== files.path)
            };
            
        case 'album_text_data':
            return {
                ...state,
                ...photo_data.data
            }

        default:
            return state
    }
}

export default gallery_uploader