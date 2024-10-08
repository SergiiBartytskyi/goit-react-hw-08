import { RootState } from "../store";

export const selectQueryFilter = (state: RootState): string =>
  state.filters.query;
