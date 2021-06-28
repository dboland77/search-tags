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
    { movieId: 1, tagId: 1, text: "and" },
    { movieId: 1, tagId: 2, text: "the" },
    { movieId: 2, tagId: 3, text: "tags" },
    { movieId: 2, tagId: 4, text: "can" },
    { movieId: 3, tagId: 5, text: "be" },
    { movieId: 4, tagId: 6, text: "filtered" },
    { movieId: 5, tagId: 7, text: "now" },
  ],
  filteredTagList: [],
  totalTagCount: 7
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
      const [tag,movie, text] = action.payload;
      
      return {
        ...state,
        taglist:  [...state.taglist, { movieId: movie, tagId: tag, text: text }],
        totalTagCount: state.totalTagCount + 1
      };
    case "tags/tagsLoaded": {
      const newMovies = action.payload;
      return {
        ...state,
        status: "idle",
        movies: newMovies,
      };
    }
    case "tags/tagsFiltered": {
      const searchPattern = action.payload
      return {
        ...state,
        filteredTagList:  [...state.taglist.filter(
          tag=> tag.text.match(searchPattern))]
      }};
    default:
      return state;
  }
}

// Action creators
export const tagAdded = (tagId, movieId, text) => {
  return { type: "tags/tagAdded", payload: [tagId, movieId, text]}};

export const tagRemoved = (tagId, movieId) => ({
  type: "tags/tagRemoved",
  payload: [tagId, movieId],
});

export const tagFiltered = (searchText) => ({
  type: "tags/tagsFiltered",
  payload: searchText,
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
export const selectTotalTagCount = (state)=> state.tags.totalTagCount

export const selectTagListbyId = id => state => {
  return state.tags.taglist.filter(tag=>tag.movieId===id)
}

export const selectTagCountbyMovie = id => state => {
  return state.tags.taglist.filter(tag=>tag.movieId===id).length
}
