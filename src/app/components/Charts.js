import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";
export default function ChartComponent() {
  const dataLangueStore = useSelector((state) => state.langue.data);
  const data = [["language", "quantity"]].concat(dataLangueStore);

  const options = {
    chart: {
      title: "popular languages in the world",
      subtitle: "top 15 most used languages",
    },
  };
  return (
    <div className="pt-5">
      <Chart
        chartType="Bar"
        width="100%"
        height="1000px"
        data={data}
        options={options}
      />
    </div>
  );
}
