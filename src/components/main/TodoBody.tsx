import { useEffect, useState } from "react";
import { TodoEntry, TodoList } from "../../types/types";
import { DeleteButton } from "./DeleteButton";

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

type ToDoBodyProps = {
  data: TodoList;
  newTodo?: TodoEntry;
};

export default function ToDoBody({ data, newTodo }: ToDoBodyProps) {
  const [todos, setTodos] = useState([...data]);

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      [...prev].map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (newTodo) {
      setTodos((prev) => [newTodo, ...prev]);
    }
  }, [newTodo]);

  const uncheckedTodos = todos.filter((item) => !item.checked);
  const checkedTodos = todos.filter((item) => item.checked);

  if (todos.length === 0) return <ToDoEmpty />;

  return (
    <div className="flex flex-col gap-y-8">
      <section className="flex flex-col gap-y-2">
        <div className="flex justify-between text-amber-200">
          <h2 className="font-semibold ml-1">To Do</h2>
          <div className="mr-1">{uncheckedTodos.length} items</div>
        </div>

        <ul className="flex flex-col gap-y-4">
          {uncheckedTodos.map((item) => (
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
        <div className="flex justify-between text-amber-200">
          <h2 className="font-semibold ml-1">Done</h2>
          <div className="mr-1">{checkedTodos.length} items</div>
        </div>
        <ul className="flex flex-col gap-y-4 opacity-70">
          {checkedTodos.map((item) => (
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
