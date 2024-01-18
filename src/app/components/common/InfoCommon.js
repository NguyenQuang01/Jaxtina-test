export default function InfoCommon(props) {
  const dataDisplay =
    typeof props.data === "object"
      ? Object.entries(props.data)
          .map(([key, value]) => ` ${value}`)
          .join(", ")
      : props.data;
  return (
    <div className="flex items-center">
      <div className="box_title_text">{props.name}:</div>
      {dataDisplay}
    </div>
  );
}
