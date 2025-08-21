import Input from "@/shared/ui/Input";
import { InputType } from "@/shared/types/InputType";
import { ERROR_STRING } from "../consts";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
}

export default function NameInput({ value, onChange, error }: Props) {
  if (error) {
    return (
      <Input type={InputType.TEXT} placeholder="Имя" value={value} onChange={onChange} error={ERROR_STRING} />
    );
  }

  return (
    <Input type={InputType.TEXT} placeholder="Имя" value={value} onChange={onChange} />
  );
}
