import MainHeader from "./main-header";
import MainList from "./main-list";

export default function Main() {
  return (
    <main
      className="flex-1 mx-auto mt-[56px] md:[64px] lg:mt-[72px] container bg-gunmetal flex flex-col 
      max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
      border-brown 
      py-3 px-4 sm:px-6 md:px-12"
    >
      <div className="flex flex-col gap-y-4 mt-6 -m-2 md:mt-8 ">
        <MainHeader />
        <MainList />
      </div>
    </main>
  );
}
