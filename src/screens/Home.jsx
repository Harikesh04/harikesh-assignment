import TaxCalculatorHeader from "../components/home/TaxCalculatorHeader";
import DynamicForm from "../components/utils/DynamicForm/DynamicForm";
import { FormData } from "../constants/home/tax-calculator-static-data";

const Home = () => {
  return (
    <section className="bg-customGrey h-full min-h-screen py-8 px-10 w-full ">
      <div className=" bg-white w-full p-10 rounded-lg  flex flex-col items-center justify-center">
        <TaxCalculatorHeader />
        <DynamicForm fields={FormData} />
      </div>
    </section>
  );
};

export default Home;
