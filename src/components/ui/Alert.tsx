interface Props {
  children: React.ReactNode;
}

export default function Alert(props: Props) {
  return (
    <div className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-gray-800 dark:text-blue-400">
      {props.children}
    </div>
  );
}
