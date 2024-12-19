import './App.css' // Importing a CSS file for styling the application
import {useState} from "react"; // Importing the useState hook from React to manage state

// Defining the main App component
function App() {

  // Declaring a state variable 'click' with initial value 'black'
  // setColor is the function to update the state
  const [click, setColor] = useState('black')

  // Defining a function to change the state value of 'click' to 'red'
  const changeColor = () => {
    setColor('red') // Updates the state to 'red'
  }
  
  return (
    <>
      {/* Displaying the current state value in the heading */}
      <h1>My Favourite Color Is {click}</h1>
      
      {/* Button to trigger the changeColor function on click */}
      <button onClick={changeColor}>color</button>     
    </>
  )
}
// Exporting the App component to be used in other parts of the application
export default App
