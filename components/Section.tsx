interface Props {
  children: React.ReactNode;
}

export default function Section({ children }: Props) {
  return <div className="bg-white p-2.5">{children}</div>;
}
