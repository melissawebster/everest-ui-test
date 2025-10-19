import { useEffect, useState } from "react";
import { TodoEntry, TodoList } from "../../types/types";
import ToDoLists from "./TodoLists";

const ToDoEmpty = () => (
  <div className="flex flex-col min-h-40 border border-dashed rounded-md justify-center items-center">
    <p>Nothing here for now.</p>
    <p>Let&apos;s change that!</p>
  </div>
);

type ToDoBodyProps = {
  data: TodoList;
  newTodo?: TodoEntry;
};

export default function ToDoBody({ data, newTodo }: ToDoBodyProps) {
  const [todos, setTodos] = useState([...data]);

  useEffect(() => {
    if (newTodo) {
      setTodos((prev) => [newTodo, ...prev]);
    }
  }, [newTodo]);

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const uncheckedTodos = todos.filter((item) => !item.checked);
  const checkedTodos = todos.filter((item) => item.checked);

  if (todos.length === 0) return <ToDoEmpty />;

  return (
    <div className="flex flex-col gap-y-8">
      <ToDoLists
        type="unchecked"
        data={uncheckedTodos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
      <ToDoLists
        type="checked"
        data={checkedTodos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}
