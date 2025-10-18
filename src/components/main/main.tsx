import { useTodos } from "../../hooks/useTodos";
import ToDoHeader from "./todo-header";
import ToDoList from "./todo-list";

export default function Main() {
  const { todos, loading, error } = useTodos();
  const sortedTodos = [...todos].sort((a, b) => Number(a.checked) - Number(b.checked));
  return (
    <main
      className="flex-1 mx-auto mt-[56px] md:[64px] lg:mt-[72px] container bg-gunmetal flex flex-col 
      max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 
      md:border-brown pt-4 pb-12 px-5 md:px-12"
    >
      <div className="flex flex-col gap-y-10 mt-6 -m-2 md:mt-8 ">
        <ToDoHeader />
        {error && <p>{error}</p>}
        {!error && loading && <p>Loading...</p>}
        {!error && !loading && <ToDoList data={sortedTodos} />}
      </div>
    </main>
  );
}
