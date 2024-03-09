interface IModalTitleProps {
  title: string
}

export function ModalTitle({ title }: IModalTitleProps) {
  return (
    <strong className="text-xl">{title}</strong>
  );
}
