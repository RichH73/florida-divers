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

export const updateLearningPackageData = (data) => {
  return {
    type: "UpdatePackages",
    data,
  };
};

export const loadPackageData = (data) => {
  return {
    type: "EditPackage",
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

export const clearnLearnForm = () => {
  return { type: "clearLearnForm" };
};

export const newPackageFormData = (key, value) => {
  return {
    type: "newLearnFormData",
    key,
    value,
  };
};

export const messageSeen = (data) => {
  return function (dispatch) {};
};

export const userCheck = (data) => {
  return {
    type: "NewUser",
    data,
  };
};
