import everestLogo from "/everest-logo.svg";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-bg h-16 lg:h-18">
      <div
        className="container flex mx-auto items-center justify-center md:justify-start 
        max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 
        h-16 lg:h-18 py-3 px-4 sm:px-6 md:px-12 shadow-2xl"
      >
        <div className="flex gap-x-2 items-center">
          <img
            src={everestLogo}
            className="w-[42px] h-[35px] lg:w-[48px] lg:h-[40px]"
            alt="everest-logo"
          />
          <div className="charcoal font-semibold text-4xl">
            EverTask
          </div>
        </div>
      </div>

    </header>
  );
}
