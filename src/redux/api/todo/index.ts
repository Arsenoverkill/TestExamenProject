import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getTodo: build.query<TODO.GetTodoResponse, TODO.GetTodoRequest>({
      query: () => ({
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    postTodo: build.mutation<TODO.PostTodoResponse, TODO.PostTodoRequest>({
      query: (data) => ({
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    deleteTodo: build.mutation<TODO.DeleteTodoResponse, TODO.DeleteTodoRequest>(
      {
        query: (id) => ({
          url: `/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["todo"],
      }
    ),
    editTodo: build.mutation<TODO.EditTodoResponse, TODO.EditTodoRequest>({
      query: ({ _id, data }) => ({
        url: `/${_id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodoQuery,
  usePostTodoMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
} = api;
