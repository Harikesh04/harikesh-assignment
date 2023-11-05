import { taxCalculatorHeaderData } from "../../constants/home/tax-calculator-static-data";

const SelectOptions = ({ id, options }) => (
  <div className="flex flex-col  xs:flex-row items-center gap-2 w-full  ">
    <label className="font-normal	" htmlFor={id}>
      {id}
    </label>

    <div className="p-3 bg-customGrey justify-between w-full rounded-md">
      <select
        className=" bg-customGrey w-full  outline-none  "
        id={id}
        name={id}
      >
        {options.map((option) => (
          <option key={option.value} className="w-full" value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  </div>
);

const TaxCalculatorHeader = () => {
  return (
    <div className=" w-full border-b ">
      <h1 className="text-2xl text-center font-bold flex items-center justify-center">
        Free Crypto Tax Calculator Australia
      </h1>

      <div className="flex flex-col gap-3  sm:flex-row  mt-3  justify-between w-full ">
        {taxCalculatorHeaderData.map((item) => (
          <div key={item.id} className="lg:w-[45%] ">
            <SelectOptions id={item.id} options={item.options} />
          </div>
        ))}
      </div>

      <div className="bg-customGrey h-[1px] mt-5"></div>
    </div>
  );
};

export default TaxCalculatorHeader;
