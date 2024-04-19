import './Button.css'

const Button = ({backgroundColor,color}) => {
 return(
  <>
  <button style={{backgroundColor:backgroundColor, color:color}}>CLAIM YOUR FREE TRIAL</button>
  <p>By clicking thge button, you are agreeing to our</p>
  <p>Terms and Services</p>
  </>
 )
}

export default Button
