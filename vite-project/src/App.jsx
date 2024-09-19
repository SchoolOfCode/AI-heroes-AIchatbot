
import './App.css'
import { HfInference } from '@huggingface/inference'
import { useEffect, useState } from 'react'

function App() {
  // new HfInference(process.env.token)
const theToken= new HfInference("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")

const [result, setResult] = useState(null)

const textToGenerate = "Whats is an api?"

async function classifyText(){

  try {
    const response = await theToken.textGeneration({
          model: "HuggingFaceH4/zephyr-7b-beta",
          inputs: textToGenerate,
      })
      setResult(response)
      console.log(response)
  } catch (error){
    console.log("Error is ", error)
  }
}

useEffect(() => {
  classifyText();
}, []);

return (
  <div className="App">
      <h1>Text Generation Result</h1>
      {result ? <pre>{(result.generated_text)}</pre> : <p>Loading...</p>}
    </div>
)}

export default App
