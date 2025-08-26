type Props = {
  label: string;
  onClick?: () => void;
  className?: string;
  isWhite?: boolean;
}

export default function Button({ label, onClick, className, isWhite }: Props) {
  return (
    <button onClick={onClick} className={
      `${isWhite ? "bg-white text-black" : "bg-black text-white"}
      px-3 py-2 rounded-[6px] cursor-pointer ${className}`
    }>
      {label}
    </button>
  );
}
