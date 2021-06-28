import axios from "axios";

const initialState = {
  status: "idle",
  movies: [
    { id: 1, name: "movie 1", created_at: "2020-06-20 04:23:57" },
    { id: 2, name: "movie 2", created_at: "2020-06-20 04:23:57" },
    { id: 3, name: "movie 3", created_at: "2020-06-20 04:23:57" },
    { id: 4, name: "movie 4", created_at: "2020-06-20 04:23:57" },
    { id: 5, name: "movie 5", created_at: "2020-06-20 04:23:57" },
  ],
  taglist: [
    { movieId: 1, tagId: 1, text: "Tag1" },
    { movieId: 1, tagId: 2, text: "Tag2" },
    { movieId: 2, tagId: 3, text: "Tag3" },
    { movieId: 2, tagId: 4, text: "Tag4" },
    { movieId: 3, tagId: 5, text: "Tag5" },
  ],
};

export default function tagsReducer(state = initialState, action) {
  switch (action.type) {
    case "tags/tagRemoved":
      const [id, movieId] = action.payload;
      return {
        ...state,
        taglist: state.taglist.filter(
          (tag) => !(tag.tagId === id && tag.movieId === movieId)
        ),
      };
    case "tags/tagsLoading": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "tags/tagAdded":
      const [movie, tag, text] = action.payload;
      return {
        ...state,
        tags: [...state, { movieId: movie, tagId: tag, text: text }],
      };
    case "tags/tagsLoaded": {
      const newMovies = action.payload;
      return {
        ...state,
        status: "idle",
        movies: newMovies,
      };
    }
    default:
      return state;
  }
}

// Action creators
export const tagAdded = (tag) => ({ type: "tags/tagAdded", payload: tag });

export const tagRemoved = (tagId, movieId) => ({
  type: "tags/tagRemoved",
  payload: [tagId, movieId],
});

export const tagsLoading = () => ({ type: "tags/tagsLoading" });

export const tagsLoaded = (data) => ({
  type: "tags/tagsLoaded",
  payload: data,
});

// Thunk function
export const fetchTags = () => async (dispatch) => {
  dispatch(tagsLoading());
  const source = axios.CancelToken.source();
  const URL = "https://my.api.mockaroo.com/movies.json?key=bf3c1c60";
  try {
    const response = await axios.get(URL);
    return dispatch(tagsLoaded(response.data));
  } catch (error) {
    if (axios.isCancel(error)) {
      source.cancel();
    } else {
      throw error;
    }
  }
};

//selectors
export const selectMovies = (state) => state.tags.movies;
export const selectLoadingStatus = (state) => state.tags.status;
export const selectTagList = (state) => state.tags.taglist;

export const selectTagListbyId = id => state => {
  return state.tags.taglist.filter(tag=>tag.movieId===id)
}

