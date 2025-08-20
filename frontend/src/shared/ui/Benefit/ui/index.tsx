type Props = {
  label: string;
  className?: string;
}

export default function Benefit({ label, className }: Props) {
  return (
    <li className={className}>- {label}</li>
  );
}
