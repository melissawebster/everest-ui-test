import { useEffect, useState } from "react";
import { TodoEntry, TodoList } from "../../types/types";
import { DeleteButton } from "./delete-button";

const ToDoEmpty = () => {
  return (
    <div className="flex flex-col min-h-40 border border-dashed rounded-md justify-center items-center">
      <p>Nothing here for now.</p>
      <p>Let&apos;s change that!</p>
    </div>
  );
};

type TodoItemProps = TodoEntry & {
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoItem = ({
  id,
  content,
  checked,
  onToggle,
  onDelete,
}: TodoItemProps) => {
  return (
    <div className="flex border rounded-md bg-charcoal-blue justify-between p-4">
      <div className="flex gap-x-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onToggle(id)}
          className="w-5 h-5 mt-2 accent-amber-50 cursor-pointer"
        />
        <p className={`mt-1.5 ${checked && "opacity-50"}`}>{content}</p>
      </div>
      <div className="flex gap-x-3">
        <DeleteButton id={id} onDel={() => onDelete(id)} />
      </div>
    </div>
  );
};

type ToDoListProps = {
  data: TodoList;
  newTodo?: TodoEntry;
};

export default function ToDoList({ data, newTodo }: ToDoListProps) {
  const [todos, setTodos] = useState([...data]);

  console.log(todos);

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      [...prev]
        .map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        )
        .sort((a, b) => Number(a.checked) - Number(b.checked))
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prev) =>
      prev
        .filter((item) => item.id !== id)
        .sort((a, b) => Number(a.checked) - Number(b.checked))
    );
  };

  useEffect(() => {
    if (newTodo) {
      setTodos((prev) =>
        [newTodo, ...prev]
      );
    }
  }, [newTodo]);

  if (todos.length === 0) return <ToDoEmpty />;

  return (
    <div className="flex flex-col gap-y-8">
      <section className="flex flex-col gap-y-2">
        <h2 className="font-semibold text-amber-200">To Do</h2>
        <ul className="flex flex-col gap-y-4">
          {todos
            .filter((item) => !item.checked)
            .map((item) => (
              <li key={item.id}>
                <TodoItem
                  {...item}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                />
              </li>
            ))}
        </ul>
      </section>
      <section className="flex flex-col gap-y-2">
        <h2 className="font-semibold text-amber-200">Done</h2>
        <ul className="flex flex-col gap-y-4 opacity-70">
          {todos
            .filter((item) => item.checked)
            .map((item) => (
              <li key={item.id}>
                <TodoItem
                  {...item}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                />
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}
