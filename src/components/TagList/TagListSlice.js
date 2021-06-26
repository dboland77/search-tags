const initialState = {
  tags: [{ id: 1, text: "Tag1" }],
};

export const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return {
        ...state,
        tags: state.list.filter((item) => item.id !== action.id),
      };
    case "ADD_ITEM":
      return {
        ...state,
        tags: [...state, { id: action.id, text: action.text }],
      };
    default:
      return state;
  }
};

