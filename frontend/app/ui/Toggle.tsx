import React from "react";

interface IOpenCloseButtonProps {
  isOpen: boolean,
  onClick: () => void;
}

const OpenCloseButton = ({ onClick, isOpen }: IOpenCloseButtonProps) => {

  return (
    <button
      className={`md:hidden fixed bottom-4 left-4 p-2 text-white bg-gray-800 dark:text-white dark:bg-gray-800 rounded-lg shadow-md transition duration-300`}
      onClick={onClick}
    >
      <div>
        {isOpen ? "Hide" : "Show"} Categories
      </div>
    </button>
  );
};

export default OpenCloseButton;