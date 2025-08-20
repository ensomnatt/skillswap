type Props = {
  label: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ label, onClick, className }: Props) {
  return (
    <button onClick={onClick} className={`bg-black px-3 py-2 rounded-[6px] text-white cursor-pointer ${className}`}>
      {label}
    </button>
  );
}
