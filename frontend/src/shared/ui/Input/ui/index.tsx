type Props = {
  type: string;
  placeholder: string;
  className?: string;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type, placeholder, className, error, value, onChange }: Props) {
  return (
    <div className="w-full flex flex-col gap-[1]">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full h-[50] p-[12] border
          ${error ? "border-red-500" : "border-black"}
          ${className}`}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
