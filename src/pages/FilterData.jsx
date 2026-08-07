import { useSelector } from "react-redux";

const FilterData = () => {
  const product = useSelector((state) => state.product);

  console.log(product);

  return <h1>Check the console</h1>;
};

export default FilterData;
