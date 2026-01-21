import { useState } from "react";
import { TodoEntry } from "../../types/types";

type ToDoHeaderProps = {
  onAdd?: (newTodo: TodoEntry) => void;
}

export default function ToDoHeader({onAdd} : ToDoHeaderProps) {
  const [value, setValue] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed: string = value.trim();
    const treatedTodo = {
      id: Math.floor(Math.random() * 100) + 14, //can be refined later
      content: trimmed,
      checked: false
    } as TodoEntry;
    onAdd?.(treatedTodo);
    setValue("");
  }

  const isDisabled = value.trim().length === 0;

  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="font-semibold text-lg text-amber-200 md:text-xl">
        What are you up to?
      </h1>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Type..."
          value={value}
          maxLength={250}
          onChange={(e) => setValue(e.target.value)}
          className={`h-11 px-4 border border-slate-400 rounded-l-md bg-charcoal w-full md:w-3/4 lg:w-1/2`}
        />
        <button type="submit" disabled={isDisabled} className={`h-11 px-4 border border-slate-400 rounded-r-md select-none border-bright-blue hover:opacity-90 cursor-pointer`}>
          <span className="bright-blue">Add task</span>
        </button>
      </form>
    </div>
  );
}
