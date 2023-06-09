export function Button({
  children,
  color,
  onClick,
  styles,
}: {
  children: React.ReactNode | string;
  color?: string;
  onClick?: () => void;
  styles?: object;
}) {
  return (
    <button
      className={`m-2 pl-4 pr-4 h-8 rounded-full bg-blue-500 text-white hover:bg-blue-700 transition ease-in-out`}
      onClick={onClick}
      style={styles}
    >
      {children}
    </button>
  );
}
