
const filteredTodos = todos.filter(todo => todo.completed)

const filteredTodos = useMemo(() => {
  return todos.filter(todo => todo.completed);

}, [todos]);