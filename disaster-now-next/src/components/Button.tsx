export function Button({
  children,
  color,
}: {
  children: React.ReactNode | string;
  color?: string;
}) {
  return (
    <button
      className={`m-2 pl-4 pr-4 h-8 rounded-full bg-blue-500 text-white hover:bg-blue-700 transition ease-in-out`}
    >
      {children}
    </button>
  );
}
