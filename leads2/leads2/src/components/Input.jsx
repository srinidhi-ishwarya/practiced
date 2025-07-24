const Input = ({name,label,type,required,validation = {},errors,register}) => {
  return (
    <div className="mt-10">
        <label style={{fontSize:"12px",fontWeight:500}}>{label}</label> {required &&<span className="error-text">*</span>}
        <input  id={name} type={type} placeholder={label} {...register(name, validation)}  required={required}  className="form-control" />
     {errors[name] && (
        <p className="error-text">{errors[name]?.message}</p>
      )}
    </div>
  )
}
export default Input