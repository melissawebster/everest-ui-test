import { useEffect, useState } from "react";
import type { TodoEntry, TodoList } from "../types/types";

export function useTodos() {
  const [todos, setTodos] = useState<TodoList>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://everest-interview-public-files.s3.amazonaws.com/input.json")
      .then((res) => res.json())
      .then((data) => {
        const arr = Array.isArray(data.todos) ? data.todos : [];
        const validTodos: TodoList = arr.filter(
          (item: TodoEntry) =>
            typeof item.id === "number" &&
            typeof item.content === "string" &&
            typeof item.checked === "boolean"
        );
        const sortedTodos = [...validTodos].sort((a, b) => Number(a.checked) - Number(b.checked));
        setTodos(sortedTodos);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch todos:", err);
        setError("Failed to load tasks. Please try again later.");
        setLoading(false);
      });
  }, []);

  return { todos, loading, error };
}
