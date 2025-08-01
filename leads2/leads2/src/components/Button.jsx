const Button = ({name,hanldeClick,border}) => {
  return (
    <button className={border ? "main-btn-border" : "main-btn"} type="submit"  onClick={hanldeClick}>{name}</button>
  )
}
export default Button