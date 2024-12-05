import style from "./style.module.css";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <p>© {`${new Date().getFullYear()}`} PTSFDTZ</p>
    </div>
  );
};
