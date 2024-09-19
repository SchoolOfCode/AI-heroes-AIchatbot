
import './App.css'
import { HfInference } from '@huggingface/inference'
import { useEffect, useState } from 'react'

function App() {
  // new HfInference(process.env.token)
const theToken= new HfInference("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")

const [result, setResult] = useState(null)
const [formData, setFormData]= useState(null)

const textToGenerate = "Whats is an api?"

async function classifyText(){

  try {
    const response = await theToken.textGeneration({
        model: "HuggingFaceH4/zephyr-7b-beta",
        inputs: formData,
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


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
  console.log(formData)

};


const handleSubmit = async(e) =>  {
  e.preventDefault()
  try {
    const response = await theToken.textGeneration({
      model: "HuggingFaceH4/zephyr-7b-beta",
      inputs: formData.question,
    });
    setResult(response.generated_text);
  } catch (error) {
    console.error("Error generating answer:", error)
    setResult("Sorry, I couldn't generate an answer.")
  }
}

return (
  // <div className="App">
  //     <h1>Text Generation Result</h1>
  //     {result ? <pre>{(result.generated_text)}</pre> : <p>Loading...</p>}
  //   </div>
    <div>
    <form onSubmit={handleSubmit}>
        <label>Question:
          <input
          type="text"
          name="question"
          onChange={handleChange} 
        />
        </label>
        <button>Submit</button>
    </form>
    {result && <p>Answer:{result}</p>}
    </div>

)

}

export default App
