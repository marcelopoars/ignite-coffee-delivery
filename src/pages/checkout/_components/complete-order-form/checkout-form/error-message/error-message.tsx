import { ErrorMessageContainer } from './styles';

interface ErrorMessageProps {
  error: string | undefined;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  if (!error) return;

  return <ErrorMessageContainer>{error}</ErrorMessageContainer>;
}
