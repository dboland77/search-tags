import axios from 'axios';

const initialState = {
  status: 'idle',
  movies: {},
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
      return {
        ...state,
        tags: state.tags.filter(
          (tags) => !(tags.tagId === id && tags.movieId === movieId)
        ),
      };
      case 'tags/tagsLoading': {
        return {
          ...state,
          status: 'loading',
        }
      }
    case "tag/tagAdded":
      const [movie, tag, text] = action.payload;
      return {
        ...state,
        tags: [...state, { movieId: movie, tagId: tag, text: text }],
      }
      case 'tags/tagsLoaded': {
        const newMovies = {}
        action.payload.forEach((movie) => {
          newMovies[movie.id] = movie
        })
        return {
          ...state,
          status: 'idle',
          entities: newMovies,
        }
      }
    default:
      return state;
  }
}


// Action creators
export const tagAdded = (tag) => ({ type: "tag/tagAdded", payload: tag });

export const tagRemoved = (tagId, movieId) => ({
  type: "tag/tagRemoved",
  payload: [tagId, movieId],
});

export const tagsLoading = () => ({ type: 'tags/tagsLoading' })

export const tagsLoaded = (data) => ({
  type: "tags/tagsLoaded",
  payload: data
})

export const selectMovies = (state) => state.movies

// Thunk function
export const fetchTags = () => async (dispatch) => {
  dispatch(tagsLoading())
  const source = axios.CancelToken.source();
  const URL = "https://my.api.mockaroo.com/movies.json?key=bf3c1c60";
  try {
    const response = await axios.get(URL);
    dispatch(tagsLoaded(response.data))
  } catch (error) {
    if (axios.isCancel(error)) {
      source.cancel();
    } else {
      throw error;
    }
  }
}

//selectors
export const selectTags = state=>state.tags;