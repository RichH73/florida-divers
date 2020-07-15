const initial_state = {
  text: "",
};

const richText = (state = initial_state, data) => {
  switch (data.type) {
    case "new_text":
      return {
        ...state,
        text: data.data.text,
      };
    case "clear_rich_text":
      return {
        text: "",
      };
    default:
      return state;
  }
};

export default richText;
