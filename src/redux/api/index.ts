import {
  BaseQueryFn,
  fetchBaseQuery,
  createApi,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_URL}`,
});

const ExtendedBaseQuery: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};
export const api = createApi({
  reducerPath: "api",
  baseQuery: ExtendedBaseQuery,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["todo"],
  endpoints: () => ({}),
});