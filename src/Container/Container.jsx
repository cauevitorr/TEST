import './Container.css'
import Button from '../Button/Button'
const Container = ({text,color}) => {
 return(
  <div className='container'>
   <input type="text" placeholder='Name' className='input01'/>
   <input type="text" placeholder='Last Name' />
   <input type="email" placeholder='Email Address' />
   <input type="number" placeholder='Password' />
   <Button/>
  </div>
 )
}

export default Container
