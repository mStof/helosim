const BooksText = ({ mensage = "Text" }: { mensage: string }) => {
  return (
    <div className="my-16 flex h-fit w-full justify-center gap-0.5 bg-red-900 px-6">
      <div className="h-24 w-[4.5rem] bg-blue-500"></div>
      <div className="flex flex-col justify-between bg-yellow-50 py-4 pl-2 pr-6">
        <em className="font-slab text-xs font-bold leading-tight text-pink-600">
          {
            "“Saiba que és meu amor mais que perfeito lindo maravilhoso incrivel dinivo, lindeza”"
          }
        </em>
        <p className="font-slab text-[0.5rem] font-bold text-pink-600">
          -Principe cruel
        </p>
      </div>
    </div>
  );
};
export default BooksText;
