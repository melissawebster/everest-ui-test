import { TodoEntry, TodoList } from "../../types/types";
import { DeleteButton } from "./DeleteButton";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import dragIcon from "/src/assets/icons/drag.svg";

const EmptyData = () => {
  return (
    <div className="flex flex-col min-h-25 border border-dashed rounded-md justify-center items-center">
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
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex rounded-md bg-slate-800"
    >
      <div className="flex border rounded-l-md bg-charcoal-blue justify-between w-full p-4">
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => onToggle(id)}
            className="w-5 h-5 mt-2 bg-amber-50 cursor-pointer"
          />
          <p className={`mt-1.5 ${checked ? "opacity-50 line-through" : ""}`}>
            {content}
          </p>
        </div>
        <div className="flex gap-x-2 items-center">
          <DeleteButton id={id} onDel={() => onDelete(id)} />
        </div>
      </div>
      <button
        {...attributes}
        {...listeners}
        onTouchStart={(e) => e.preventDefault()}
        className={`flex items-center justify-center cursor-grab p-1 border rounded-r text-white select-none touch-none w-15 md:w-10 hover:opacity-80`}
        aria-label="drag handle"
      >
        <span className="pointer-events-none select-none">
          <img
            src={dragIcon}
            alt="drag icon"
            className="w-6 h-6"
            draggable={false}
          />
        </span>
      </button>
    </div>
  );
};

type ToDoListsProps = {
  type: "unchecked" | "checked";
  data: TodoList;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function ToDoLists({
  type,
  data,
  onToggle,
  onDelete,
}: ToDoListsProps) {
  return (
    <section className="flex flex-col gap-y-2">
      <div className="flex justify-between text-amber-200">
        <h2 className="font-semibold ml-1">
          {type === "unchecked" ? "To Do" : "Done"}
        </h2>
        <div className="mr-1">{data.length} items</div>
      </div>
      {data.length === 0 ? (
        <EmptyData />
      ) : (
        <ul className="flex flex-col gap-y-4">
          {data.map((item) => (
            <li key={item.id}>
              <TodoItem {...item} onToggle={onToggle} onDelete={onDelete} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
