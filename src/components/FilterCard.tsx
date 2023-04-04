interface FilterCardProps {
  text: string;
  filter: any;
  onClick: () => void;
}

function FilterCard({ text, onClick, filter }: FilterCardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white bg-opacity-70 px-4 py-1 rounded-xl backdrop-blur-lg backdrop-saturate-150 transition-all cursor-pointer select-none hover:brightness-90
      ${filter === text.toLowerCase() ? '!bg-slate-300' : ''}`}
    >
      {text}
    </div>
  );
}

export default FilterCard;
