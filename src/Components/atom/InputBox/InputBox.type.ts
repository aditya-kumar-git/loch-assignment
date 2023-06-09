export interface InputBoxProps {
  placeholder?: string;
  className?: string;
  inputType?: string;
  isInputError?: boolean;
  errorMessage?: string;
  value: string;
  onSubmit?: () => void;
  onChangeText: (data: string) => void;
}
