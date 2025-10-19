import deleteIcon from "/src/assets/icons/delete.svg";
import { useState } from "react";

type DeleteButtonProps = {
  id: number
  onDel: (id: number) => void;
};

export const DeleteButton = ({ id, onDel: onDelete }: DeleteButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const icon = deleteIcon;

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center rounded-md cursor-pointer hover:opacity-80 bg-red w-8 h-8"
        aria-label="delete"
      >
        <img src={icon} alt="delete icon" className="w-5 h-5" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex justify-center items-start pt-[50%] md:pt-[30%] lg:pt-[15%] bg-black/50"
        >
          <div
            className="bg-gunmetal rounded-xl p-6 w-80 shadow-lg"
          >
            <h2 className="text-lg font-semibold mb-4">Are you sure?</h2>
            <p className="mb-6">This action cannot be undone.</p>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-3 py-1 bg-steel-blue border text-white rounded-md font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => onDelete(id)}
                className="px-3 py-1 bg-red border border-white rounded-md text-slate-800 font-semibold"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
