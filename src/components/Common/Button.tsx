const Button = ({ label, onClick }: any) => {
  return (
    <button
      className="font-bold rounded-xl bg-amber-400 hover:bg-amber-500 h-14 p-4"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
