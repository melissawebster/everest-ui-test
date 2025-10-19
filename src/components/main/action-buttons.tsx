import deleteIcon from "/src/assets/icons/delete.svg";



export const DeleteButton = () => {
  const icon = deleteIcon;

  return (
    <button
      className="flex items-center justify-center rounded-md cursor-pointer hover:opacity-80 bg-red w-8 h-8"
      aria-label="delete"
    >
      <img src={icon} alt="delete icon" className="w-5 h-5" />
    </button>
  );
};
