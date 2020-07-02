const initialState = {
  packages: [
    {
      title: "",
      description: "",
      price: "",
      link: "",
      linkText: "",
    },
  ],
};

const packageInitialState = {
  title: "",
  price: "",
  link: "",
  linkText: "",
};

const learningPackages = (state = initialState, data) => {
  switch (data.type) {
    case "NewPackages":
      return {
        packages: data.data,
      };
    default:
      return state;
  }
};

export default learningPackages;

export const createNewPackage = (
  state = packageInitialState,
  type,
  key,
  value
) => {
  console.log("learn form data", type, key, value);
  switch (type) {
    case "newLearnFormData":
      console.log("ITS ALIVE!!!!");
      return {
        ...state,
        //text: data.data.text
      };
    case "clearLearnForm":
      return {
        title: "",
        price: "",
        link: "",
        linkText: "",
      };
    default:
      return state;
  }
};
