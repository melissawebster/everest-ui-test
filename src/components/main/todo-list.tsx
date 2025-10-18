import { useState } from "react";
import { TodoEntry } from "../../types/types";
import { ActionButton } from "./action-buttons";

const ToDoEmpty = () => {
  return (
    <div className="flex flex-col min-h-40 border border-dashed rounded-md justify-center items-center">
      <p>Nothing here for now.</p>
      <p>Let&apos;s change that!</p>
    </div>
  );
};

const TodoItem = ({ id, content, checked }: TodoEntry) => {
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <div className="flex border rounded-md bg-charcoal-blue justify-between p-4" key={id}>
      <div className="flex gap-x-3">
        <input
          type="radio"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="w-5 h-5 mt-2 cursor-pointer"
        />
        <p className="mt-1.5">
          {content}
        </p>
      </div>
      <div className="flex gap-x-3">
        <ActionButton type="edit" />
        <ActionButton type="delete" />
      </div>
    </div>
  );
};

export default function ToDoList() {
  return <TodoItem id={1} content="example" checked={false} />;
}
