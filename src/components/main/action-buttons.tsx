import editIcon from "/src/assets/icons/edit.svg";
import deleteIcon from "/src/assets/icons/delete.svg";

type ActionButtonProps = {
  type: 'edit' | 'delete';
};

export const ActionButton = ({ type }: ActionButtonProps) => {
  const icon = type === 'edit' ? editIcon : deleteIcon;
  const bgColor = type === 'edit' ? 'bg-yellow-400' : 'bg-red-400';

  return (
    <button
      className={`${bgColor} p-2 rounded-md cursor-pointer hover:opacity-80 transition`}
      aria-label={type}
    >
      <img src={icon} alt={`${type} icon`} className="w-5 h-5" />
    </button>
  );
};
