const initialState = {
  tags: [
    { movieId: 1, tagId: 1, text: "Tag1" },
    { movieId: 1, tagId: 2, text: "Tag2" },
    { movieId: 1, tagId: 3, text: "Tag3" },
    { movieId: 1, tagId: 4, text: "Tag4" },
    { movieId: 1, tagId: 5, text: "Tag5" },
  ],
};

export default function tagsReducer(state = initialState, action) {
  switch (action.type) {
    case "tag/tagRemoved":
      const [id, movieId] = action.payload;
      console.log(id, movieId);
      return {
        ...state,
        tags: state.tags.filter(
          (tags) => !(tags.tagId === id && tags.movieId === movieId)
        ),
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

export const tagRemoved = (tagId, movieId) => ({
  type: "tag/tagRemoved",
  payload: [tagId, movieId],
});
