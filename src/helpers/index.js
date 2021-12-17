export default function compeletedTodosNumber(todos) {
  const completedTodos = todos.filter((todo) => {
    return todo.completed === true;
  });
  return completedTodos;
}
