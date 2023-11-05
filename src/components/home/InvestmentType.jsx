export default function InvestmentType({
  options,
  onChange,
  handleInvestmentType,
}) {
  function handleClick(item) {
    onChange(item.value);
    handleInvestmentType(item.value);
  }

  return (
    <div className="flex gap-3">
      {options.map((item, index) => (
        <div key={index} className="flex flex-col">
          <div
            className={`px-3 py-2 cursor-pointer border rounded-md ${
              item.selected ? "bg-blue-50 text-blue-800 border-blue-800" : ""
            }`}
            onClick={() => handleClick(item)}
          >
            {item.text}
          </div>
          <span className="text-xs font-light">{item.desc}</span>
        </div>
      ))}
    </div>
  );
}
