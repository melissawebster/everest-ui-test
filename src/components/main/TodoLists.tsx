import { TodoEntry, TodoList } from "../../types/types";
import { DeleteButton } from "./DeleteButton";

type TodoItemProps = TodoEntry & {
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoItem = ({ id, content, checked, onToggle, onDelete }: TodoItemProps) => (
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

type ToDoListsProps = {
  type: "unchecked" | "checked";
  data: TodoList;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function ToDoLists({ type, data, onToggle, onDelete }: ToDoListsProps) {
  return (
    <section className="flex flex-col gap-y-2">
      <div className="flex justify-between text-amber-200">
        <h2 className="font-semibold ml-1">
          {type === "unchecked" ? "To Do" : "Done"}
        </h2>
        <div className="mr-1">{data.length} items</div>
      </div>
      <ul className="flex flex-col gap-y-4">
        {data.map((item) => (
          <li key={item.id}>
            <TodoItem {...item} onToggle={onToggle} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </section>
  );
}
