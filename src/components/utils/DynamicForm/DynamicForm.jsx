import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import CalculatorResult from "../../home/CalculatorResult";

function InvestmentType({ options, onChange, handleInvestmentType }) {
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

const DynamicForm = ({ fields }) => {
  const [formState, setFormState] = useState({});
  const [taxRateAsPerAnnualIncome, setTaxRateAsPerAnnualIncome] =
    useState("0%");
  const [investmentType, setInvestmentType] = useState("long");

  const handleInputChange = (fieldName, value) => {
    if (fieldName === "annualIncome") {
      setTaxRateAsPerAnnualIncome(value);
    } else if (fieldName === "investmentType") {
      const updatedOptions = fields
        .find((field) => field.name === "investmentType")
        .options.map((option) => {
          return {
            ...option,
            selected: option.value === value,
          };
        });

      setFormState((prevState) => ({
        ...prevState,
        [fieldName]: value,
        investmentType: updatedOptions,
      }));
      setInvestmentType(value);
    } else if (fieldName === "priceOfCrypto" || fieldName === "salePriceOfCrypto" || fieldName === "expenses") {
      const priceOfCrypto = parseFloat(formState.priceOfCrypto) || 0;
      const salePriceOfCrypto = parseFloat(formState.salePriceOfCrypto) || 0;
      const expenses = parseFloat(formState.expenses) || 0;
      const capitalGainAmount = priceOfCrypto - salePriceOfCrypto - expenses;
      setFormState((prevState) => ({
        ...prevState,
        [fieldName]: value,
        capitalGainAmount: capitalGainAmount >= 0 ? capitalGainAmount : 0,
      }));
	  
    } else {
      setFormState((prevState) => ({ ...prevState, [fieldName]: value }));
    }
  };

  useEffect(() => {
    const priceOfCrypto = parseFloat(formState.priceOfCrypto) || 0;
    const salePriceOfCrypto = parseFloat(formState.salePriceOfCrypto) || 0;
    const expenses = parseFloat(formState.expenses) || 0;
    const capitalGainAmount = priceOfCrypto - salePriceOfCrypto - expenses;
    setFormState((prevState) => ({
      ...prevState,
      capitalGainAmount: capitalGainAmount >= 0 ? capitalGainAmount : 0,
	  discountGain:capitalGainAmount>=0?capitalGainAmount/2:0,
    }));
  }, [formState.priceOfCrypto, formState.salePriceOfCrypto, formState.expenses]);

  const label =
    investmentType === "short"
      ? "Discount for short term gains"
      : "Discount for long term gains";

  return (
    <form className="w-full">
      <div className="flex justify-between flex-wrap">
        {fields.map((field, index) => (
          <div key={index} className={`w-full mt-4 lg:w-[45%]`}>
            <span >{field?.label || label}</span>
            {field.type === "select" ? (
              <Input
                inputType={"select"}
                options={field.options}
                required={field.required}
                value={formState[field.name] || ""}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
              />
            ) : field.type === "text" ? (
              <span className="text-base font-medium">
                <br />
                {taxRateAsPerAnnualIncome}
              </span>
            ) : field.type === "options" ? (
              <div>
                <InvestmentType
                  options={formState.investmentType || field.options}
                  handleInvestmentType={setInvestmentType}
                  onChange={(value) =>
                    handleInputChange("investmentType", value)
                  }
                />
              </div>
            ) : (
              <Input
                inputType={"formInput"}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                value={formState[field.name] || ""}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>

	  <CalculatorResult />
      
    </form>
  );
};

export default DynamicForm;
