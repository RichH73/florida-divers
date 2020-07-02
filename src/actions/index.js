export const getNewGalleries = (data) => {
  return {
    type: "NewGalleries",
    data,
  };
};

export const contactForm = (data) => {
  return {
    type: "NewFormData",
    data,
  };
};

export const learningPackageData = (data) => {
  return {
    type: "NewPackages",
    data,
  };
};

export const changeAdminPanel = (data) => {
  return {
    type: "NavigatePanel",
    data,
  };
};

export const editText = (data) => {
  return {
    type: "new_text",
    data,
  };
};

export const clearRichText = () => {
  return {
    type: "clear_rich_text",
  };
};

export const newPackageFormData = (key, value) => {
  return {
    type: "newLearnFormData",
    key,
    value,
  };
};
