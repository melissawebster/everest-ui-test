export default function MainHeader() {
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="font-semibold text-lg md:text-xl">
        What do you want to do today?
      </h1>
      <div className="flex">
        <input
          type="text"
          placeholder="Type what you’re up to..."
          className="h-11 px-4 border rounded-l-md bg-charcoal-blue w-full md:w-3/4 lg:w-1/2"
        />
        <button className="h-11 px-4 border rounded-r-md bg-steel-blue cursor-pointer">
          Add
        </button>
      </div>
    </div>
  );
}
