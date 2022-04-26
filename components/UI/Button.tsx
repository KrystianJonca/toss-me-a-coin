import React from 'react';

interface ButtonProps {
  onClick: () => void;
  readonly children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="text-sm sm:text-md md:text-lg bg-lightBlue hover:bg-darkBlue transition text-white font-bold py-2 px-4 rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
