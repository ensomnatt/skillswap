import Input from "@/shared/ui/Input";
import { ERROR_STRING } from "../consts";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
}

export default function EmailInput({ value, onChange, error }: Props) {
  if (error) {
    return (
      <Input type="email" placeholder="Email" value={value} onChange={onChange} error={ERROR_STRING} />
    );
  }

  return (
    <Input type="email" placeholder="Email" value={value} onChange={onChange} />
  );
}
