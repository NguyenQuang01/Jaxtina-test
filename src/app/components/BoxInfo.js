import { useSelector, useDispatch } from "react-redux";
import { setDataInfo } from "../store/slice";
import "@/app/asset/style/box.css";
import InfoCommon from "./common/InfoCommon";
export default function BoxInfo() {
  const dispatch = useDispatch();
  const dataInfo = useSelector((state) => state.info.data);
  const handleClose = () => {
    dispatch(setDataInfo(null));
  };
  return (
    dataInfo && (
      <div className="absolute box  ">
        <button className="box-circle" onClick={handleClose}>
          x
        </button>
        <h2 className="box_title">Country information:</h2>
        <InfoCommon name="Name" data={dataInfo?.name?.common} />
        <InfoCommon name="Official" data={dataInfo?.name?.official} />
        <InfoCommon name="Borders" data={dataInfo?.borders} />
        <InfoCommon name="Capital" data={dataInfo?.capital} />
        <InfoCommon name="Population" data={dataInfo?.population} />
        <InfoCommon name="Region" data={dataInfo?.region} />
        <InfoCommon name="Subregion" data={dataInfo?.subregion} />
        <InfoCommon name="Timezones" data={dataInfo?.timezones} />
        <InfoCommon name="CapitalInfo" data={dataInfo?.capitalInfo?.latlng} />
      </div>
    )
  );
}
