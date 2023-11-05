import { useEffect, useState } from "react";
import Input from "../Input/Input";
import CalculatorResult from "../../home/CalculatorResult";
import InvestmentType from "../../home/InvestmentType";

const DynamicForm = ({ fields }) => {
  const [formState, setFormState] = useState({});
  const [taxRateAsPerAnnualIncome, setTaxRateAsPerAnnualIncome] =
    useState("0%");
  const [taxPercentage, setTaxPercentage] = useState(0);
  const [investmentType, setInvestmentType] = useState("long");

  function extractPercentage(expression) {
    // Extracting the portion after '+' and before '%'
    var percentageString = expression.split("+")[1].split("%")[0].trim();
    // Parsing the extracted string to get the integer value
    var percentage = parseFloat(percentageString);
    return percentage;
  }

  const handleInputChange = (fieldName, value) => {
    if (fieldName === "annualIncome") {
      setTaxRateAsPerAnnualIncome(value);
      setFormState((prevState) => ({
        ...prevState,
        [fieldName]: value,
      }));
      const percentage = extractPercentage(value);
      setTaxPercentage(percentage);
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
    } else if (
      ["priceOfCrypto", "salePriceOfCrypto", "expenses"].includes(fieldName)
    ) {
      setFormState((prevState) => ({
        ...prevState,
        [fieldName]: value,
      }));
    } else {
      setFormState((prevState) => ({ ...prevState, [fieldName]: value }));
    }
  };

  useEffect(() => {
    const { priceOfCrypto, salePriceOfCrypto, expenses } = formState;
    const capitalGainAmount = Math.max(
      priceOfCrypto - salePriceOfCrypto - expenses,
      0,
    );
    setFormState((prevState) => ({
      ...prevState,
      capitalGainAmount: capitalGainAmount,
      discountGain: capitalGainAmount / 2,
    }));
  }, [
    formState.priceOfCrypto,
    formState.salePriceOfCrypto,
    formState.expenses,
  ]);

  const label =
    investmentType === "short"
      ? "Discount for short term gains"
      : "Discount for long term gains";

  return (
    <form className="w-full">
      <div className="flex justify-between flex-wrap">
        {fields.map((field, index) => (
          <div key={index} className={`w-full mt-4 lg:w-[45%]`}>
            <span>{field?.label || label}</span>
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

      <CalculatorResult
        netCapitalGain={formState["discountGain"]}
        taxPercentage={taxPercentage}
      />
    </form>
  );
};

export default DynamicForm;
