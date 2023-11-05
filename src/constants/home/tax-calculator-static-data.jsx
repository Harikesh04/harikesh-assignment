export const taxCalculatorHeaderData = [
  {
    label: "Financial Year",
    id: "financialYear",
    name: "financialYear",
    options: [{ value: "FY 2023-34", text: "FY 2023-34" }],
  },
  {
    label: "Country",
    id: "country",
    name: "country",
    options: [{ value: "Australia", text: "Australia" }],
  },
];
export const FormData = [
  {
    name: "priceOfCrypto",
    label: "Enter purchase price of Crypto",
    type: "number",
    placeholder: "",
    required: true,
  },
  {
    name: "salePriceOfCrypto",
    label: "Enter sale price of Crypto",
    type: "number",
    placeholder: "",
    required: true,
  },
  {
    name: "expenses",
    label: "Enter your Expenses",
    type: "number",
    placeholder: "",
    required: true,
  },
  {
    name: "investmentType",
    label: "Investment Type",
    type: "options",
    options: [
      { value: "short", text: "Short Term", desc: "< 12 months",selected:false },
      { value: "long", text: "Long Term", desc: "> 12 months" ,selected:true},
    ],

    required: true,
  },
  {
    name: "annualIncome",
    label: "Select Your Annual Income",
    type: "select",
    options: [
      { value: "0%", text: "$0 - $18,200" },
      {
        value: "Nil + 19% of the excess over $18,200",
        text: "$18,201 - $45,000",
      },
      {
        value: "$5,092 + 32.5% of the excess over $45,000",
        text: "$45,001 - $120,000",
      },
      {
        value: "$29,467 + 37% of the excess over $120,000",
        text: "$120,001 - $180,000",
      },
      { value: "$51,667 + 45% of the excess over $180,000", text: "$180,001+" },
    ],
    required: true,
  },
  {
    label: "Tax Rate",
    type: "text",
  },
  {
    name: "capitalGainAmount",
    label: "Capital gains amount",
    type: "number",
    placeholder: "",
    required: true,
  },
  {
    type: "number",
    placeholder: "",
    name: "discountGain",
    
  },
];
