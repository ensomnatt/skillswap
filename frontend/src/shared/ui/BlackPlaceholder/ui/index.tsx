type Props = {
  className: string;
}

export default function BlackPlaceholder({ className }: Props) {
  return (
    <div className={`bg-black ${className}`}></div>
  );
}
