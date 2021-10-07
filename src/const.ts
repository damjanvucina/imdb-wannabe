export enum ActionTypes {
  FetchPopularMoviesThunk = 'FETCH_POPULAR_MOVIES_THUNK',
}

export type Movie = {
  name: string;
  id: number;
};
