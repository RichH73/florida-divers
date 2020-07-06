const initialState = {
  config: {
    url: "",
    activeModules: {
      ADMIN: true,
      LEARN: false,
    },
  },
};

const Config = (state = initialState, config) => {
  console.log("cofnig data", config);
  switch (config.type) {
    case "Set_Config":
      return {
        ...config.data,
      };
    default:
      return state;
  }
};

export default Config;
