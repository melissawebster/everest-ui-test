import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useState, useEffect } from "react";
import { TodoEntry, TodoList } from "../../types/types";
import ToDoLists from "./TodoLists";

type ToDoBodyProps = {
  data: TodoList;
  newTodo?: TodoEntry;
};

export default function ToDoBody({ data, newTodo }: ToDoBodyProps) {
  const [todos, setTodos] = useState([...data]);

  useEffect(() => {
    if (newTodo) setTodos((prev) => [newTodo, ...prev]);
  }, [newTodo]);

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const uncheckedTodos = todos.filter((t) => !t.checked);
  const checkedTodos = todos.filter((t) => t.checked);

  const handleDragEnd = (event: DragEndEvent, listType: "unchecked" | "checked") => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    let list = listType === "unchecked" ? uncheckedTodos : checkedTodos;
    const oldIndex = list.findIndex((t) => t.id === active.id);
    const newIndex = list.findIndex((t) => t.id === over.id);

    const newOrder = arrayMove(list, oldIndex, newIndex);

    if (listType === "unchecked") {
      setTodos([...newOrder, ...checkedTodos]);
    } else {
      setTodos([...uncheckedTodos, ...newOrder]);
    }
  };

  return (
    <div className="flex flex-col gap-y-8">
      {/* Unchecked draggable list */}
      <DndContext collisionDetection={closestCenter} onDragEnd={(e) => handleDragEnd(e, "unchecked")}>
        <SortableContext items={uncheckedTodos.map((t) => t.id)} strategy={verticalListSortingStrategy}>
          <ToDoLists
            type="unchecked"
            data={uncheckedTodos}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </SortableContext>
      </DndContext>

      {/* Checked draggable list */}
      <DndContext collisionDetection={closestCenter} onDragEnd={(e) => handleDragEnd(e, "checked")}>
        <SortableContext items={checkedTodos.map((t) => t.id)} strategy={verticalListSortingStrategy}>
          <ToDoLists
            type="checked"
            data={checkedTodos}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </SortableContext>
      </DndContext>
    </div>
  );
}
