import style from "./squar.module.css";

export default function Squar(props) {
  return (
    <>
      <div onClick={props.onClick} className={style.squarval}>
        <h5>{props.value}</h5>
      </div>
    </>
  );
}
