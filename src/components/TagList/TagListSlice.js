const initialState = {
  tags: [
    { id: 1, text: "Tag1" },
    { id: 2, text: "Tag2" },
    { id: 3, text: "Tag3" },
    { id: 4, text: "Tag4" },
    { id: 5, text: "Tag5" }
  ],
};

export default function tagsReducer(state = initialState, action) {
  switch (action.type) {
    case "tag/tagRemoved":
      const tagId = action.payload;
      console.log(tagId)
      return {
        ...state,
        tags: state.tags.filter((item) => item.id !== tagId),
      };
    case "tag/tagAdded":
      const tag = action.payload;
      return {
        ...state,
        tags: [...state, { id: tag.id, text: tag.text }],
      };
    default:
      return state;
  }
}

export const tagAdded = (tag) => ({ type: "tag/tagAdded", payload: tag });

export const tagRemoved = (tagId) => ({
   type: 'tag/tagRemoved',
   payload: tagId
});
