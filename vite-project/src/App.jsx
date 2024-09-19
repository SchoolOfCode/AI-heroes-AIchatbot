
import './App.css'
import { HfInference } from '@huggingface/inference'

function App() {
  // new HfInference(process.env.token)
const theToken= process.env.TOKEN
console.log(theToken)
  return (
    <>
      <p>{theToken}</p>
    </>
  )
}

export default App
