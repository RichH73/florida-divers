const _ = require("lodash");

const initialState = {
  url: "http://floridivers.com:8600/",
  activeModules: {
    ADMIN: true,
    LEARN: false,
  },
};

if (_.isEqual(_.get(initialState, "activeModules.ADMIN"), true)) {
  _.set(initialState, "url", "http://localhost:8600/");
  console.log("this", this);
}

const Config = (state = initialState, config) => {
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
