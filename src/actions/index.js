export const getNewGalleries = (data) => {
    return {
        type: 'NewGalleries',
        data
    }
}

export const contactForm = (data) => {
    return {
        type: 'NewFormData',
        data
    }
}

export const learningPackageData = (data) => {
    return {
        type: 'NewPackages',
        data
    }
}