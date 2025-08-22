import Input from "@/shared/ui/Input";
import { ERROR_STRING } from "../consts";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
}

export default function RepeatPasswordInput({ value, onChange, error }: Props) {
  if (error) {
    return (
      <Input type="password" placeholder="Повторите пароль" value={value} onChange={onChange} error={ERROR_STRING} />
    );
  }

  return (
    <Input type="password" placeholder="Повторите пароль" value={value} onChange={onChange} />
  );
}
