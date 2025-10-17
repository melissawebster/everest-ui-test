export default function Footer() {
  return (
    <footer className="h-18 bg-charcoal-blue flex border-t-3">
      <div
        className="container flex mx-auto items-center justify-center 
        max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 
        py-3 px-4 sm:px-6 md:px-12"
      >
        <div className="flex flex-col items-center gap-y-1 text-white text-sm">
          <p>Assessment project for Everest Systems</p>
          <p>Developed by Melissa Webster</p>
        </div>
      </div>
    </footer>
  );
}
