
import './App.css'
import { HfInference } from '@huggingface/inference'

function App() {
  // new HfInference(process.env.token)
const theToken= new HfInference("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")
console.log(theToken)

const textToClassify = "I just bought a new camera. It's been a real disappointment."

async function classifyText(){

  try {
    const response = await theToken.textClassification({
          model: "SamLowe/roberta-base-go_emotions",
          inputs: textToClassify
      })
      console.log(response[0].label)
      console.log(response)
  } catch (error){
    console.log("Error is ", error)
  }
}
classifyText()

return (
    <>
      
    </>
  )
}

export default App
