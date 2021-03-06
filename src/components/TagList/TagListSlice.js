import axios from "axios";

const initialState = {
  status: "",
  movies: [],
  taglist: [],
  filteredTagList: [],
  totalTagCount: 0,
  applyFilter: false
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
      const [tag, movie, text] = action.payload;

      return {
        ...state,
        taglist: [...state.taglist, { movieId: movie, tagId: tag, text: text }],
        totalTagCount: state.totalTagCount + 1,
      };
    case "tags/tagsLoaded": {
      const newMovies = action.payload;
      return {
        ...state,
        status: "idle",
        movies: newMovies,
      };
    }
    case "tags/filterStart": {
      return {
        ...state,
        applyFilter: true,
      };
    }
    case "tags/filterDone": {
      return {
        ...state,
        applyFilter: false,
      };
    }
    case "tags/tagsFiltered": {
      const searchPattern = action.payload;
      return {
        ...state,
        filteredTagList: [
          ...state.taglist.filter((tag) => tag.text.match(searchPattern)),
        ],
      };
    }
    default:
      return state;
  }
}

// Action creators
export const tagAdded = (tagId, movieId, text) => {
  return { type: "tags/tagAdded", payload: [tagId, movieId, text] };
};

export const tagRemoved = (tagId, movieId) => ({
  type: "tags/tagRemoved",
  payload: [tagId, movieId],
});

export const tagFiltered = (searchText) => ({
  type: "tags/tagsFiltered",
  payload: searchText,
});

export const tagsLoading = () => ({ type: "tags/tagsLoading" });
export const tagFilterStart = () => ({ type: "tags/filterStart" });
export const tagFilterDone = () => ({ type: "tags/filterDone" });

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
export const selectFilterStatus = (state) => state.tags.applyFilter;
export const selectTagList = (state) => state.tags.taglist;
export const selectTotalTagCount = (state) => state.tags.totalTagCount;

export const selectTagListbyId = (id) => (state) => {
  return state.tags.taglist.filter((tag) => tag.movieId === id);
};

export const selectFilteredTagListbyId = (id) => (state) => {
  return state.tags.filteredTagList.filter((tag) => tag.movieId === id);
};

export const selectTagCountbyMovie = (id) => (state) => {
  return state.tags.taglist.filter((tag) => tag.movieId === id).length;
};
