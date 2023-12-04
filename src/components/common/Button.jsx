
const Button = ({textcolor, bgcolor, className, onClick, disabled, children}) => {

  return (
    <>
        <button type="submit" disabled={disabled} className={`bg-${bgcolor} text-${textcolor} ${className} mb-2`} onClick={onClick}>{children}</button>
    </>
  )
}

export default Button;