import { TodoList } from "../../types/types";
import { EmptyData } from "./EmptyData";
import { TodoItem } from "./TodoItem";


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
