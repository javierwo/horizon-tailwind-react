function CardPanel(props) {
  const { extra, children, ...rest } = props;
  return (
    <div className={`p-4 h-full bg-white rounded-2xl shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none ${extra}`}>
      <div className="flex h-full flex-col gap-2 rounded-2xl bg-white bg-clip-border p-2 border-2 border-gray-100">
        {children}
      </div>
    </div>
  );
}

export default CardPanel;