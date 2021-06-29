const initialState = {
  status: "idle",
  movies: [
    { id: 1, name: "movie 1", created_at: "1977-01-01 04:23:57" },
    { id: 2, name: "movie 2", created_at: "1981-03-02 04:23:57" },
    { id: 3, name: "movie 3", created_at: "2000-06-10 04:23:57" },
    { id: 4, name: "movie 4", created_at: "2007-07-20 04:23:57" },
    { id: 5, name: "movie 5", created_at: "2020-08-21 04:23:57" },
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
  totalTagCount: 7,
};
