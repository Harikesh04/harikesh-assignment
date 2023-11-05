const CalculatorResult = ({ netCapitalGain, taxPercentage }) => {
  const taxValue = (netCapitalGain * taxPercentage) / 100;

  return (
    <div className="flex flex-col gap-5 lg:flex-row w-full justify-between mt-8">
      <div className="bg-green-100 rounded-md p-3 text-center lg:w-[45%]">
        <span>Net Capital gains tax amount </span>
        <br />
        <span className="text-customGreen text-2xl font-bold">
          {isNaN(netCapitalGain) ? "" : netCapitalGain}
        </span>
      </div>
      <div className="bg-blue-100 rounded-md p-3 text-center lg:w-[45%]">
        <span>The tax you need to pay*</span>
        <br />
        <span className="text-blue-800 text-2xl font-bold">
          {isNaN(taxValue) ? "" : `$${taxValue}`}
        </span>
      </div>
    </div>
  );
};

export default CalculatorResult;
