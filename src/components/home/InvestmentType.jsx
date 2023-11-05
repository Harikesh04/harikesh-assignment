import tick from "../../assets/tick.svg";
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
    <div className="flex flex-col xs:flex-row gap-3">
      {options.map((item, index) => (
        <div key={index} className="flex flex-col">
          <div
            className={`px-3 flex  gap-1 whitespace-nowrap min-w-[120px] items-center py-2 cursor-pointer border rounded-md ${
              item.selected ? "bg-blue-50 text-blue-800 border-blue-800" : ""
            }`}
            onClick={() => handleClick(item)}
          >
            {item.text}
            {item.selected && <img src={tick} className="w-5 h-5" alt="svg" />}
          </div>
          <span className="text-xs font-light">{item.desc}</span>
        </div>
      ))}
    </div>
  );
}
