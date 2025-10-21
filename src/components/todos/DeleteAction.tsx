import deleteIcon from "/src/assets/icons/delete.svg";
import { useState } from "react";

type DeleteActionProps = {
  id: number;
  onDel: (id: number) => void;
};

export const DeleteAction = ({ id, onDel }: DeleteActionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const icon = deleteIcon;

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center rounded-md cursor-pointer select-none touch-none hover:opacity-80 bg-red w-10 md:w-8 h-10 md:h-8"
        aria-label="delete button"
        onTouchStart={(e) => e.preventDefault()}
      >
        <span className="pointer-events-none select-none">
          <img
            src={icon}
            alt="delete icon"
            className="w-5.5 h-5.5 md:w-5 md:h-5"
            draggable={false}
          />
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-start pt-[50%] md:pt-[30%] lg:pt-[15%] bg-black/50">
          <div className="bg-charcoal rounded-xl p-6 w-80 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Are you sure?</h3>
            <p className="mb-6">This action cannot be undone.</p>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-3 py-1 bg-steel-blue border select-none text-white rounded-md font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => onDel(id)}
                className="px-3 py-1 bg-red border border-white select-none rounded-md text-slate-800 font-semibold"
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
