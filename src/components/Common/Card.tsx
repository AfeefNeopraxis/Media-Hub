const Card = ({ children }: any) => {
  return (
    <div className={"w-full h-full rounded-3xl p-2 bg-white shadow-md"}>
      {children}
    </div>
  );
};

export default Card;
