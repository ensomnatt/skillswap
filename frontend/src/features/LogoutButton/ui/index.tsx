import Button from "@/shared/ui/Button";

type Props = {
  onClick: () => void;
}

export default function LogoutButton({ onClick }: Props) {
  return (
    <Button label="Выйти" onClick={onClick} />
  );
}
