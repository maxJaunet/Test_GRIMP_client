import axios from "axios";
import { useState } from "react";

const Login = () => {

  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  })

  const handleChange = ({ target: { name, value } }) => {
    // const { name, value } = target;
    setInputValue(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/login', inputValue)
    .then(res => console.log(res))
  }

   return (
     <div>
       <h1>Sign In to access the admin page</h1>
       <form method="POST" onSubmit={handleSubmit}>
         <input type="email" name="email" value={inputValue.email} required onChange={ handleChange }/>
         <input type="password" name="password" value={ inputValue.password } required onChange={ handleChange } />
         <button type="submit">Login</button>
       </form>
    </div>
  )
};
export default Login;