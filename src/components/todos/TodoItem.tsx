import { DeleteAction } from "./DeleteAction";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import dragIcon from "/src/assets/icons/drag.svg";
import { TodoEntry } from "../../types/types";


type TodoItemProps = TodoEntry & {
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export const TodoItem = ({
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
          <DeleteAction id={id} onDel={() => onDelete(id)} />
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