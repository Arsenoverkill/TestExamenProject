namespace TODO {
  type GetTodoResponse = Todo[];
  type GetTodoRequest = void;

  type PostTodoResponse = Todo[];
  type PostTodoRequest = Todo;

  type DeleteTodoResponse = Todo[];
  type DeleteTodoRequest = number;

  type EditTodoResponse = Todo[];
  type EditTodoRequest = {
    _id: number;
    data: Todo;
  };
}
