import ImageContainer from './Components/ImageContainer.jsx'
import Details from './Components/Details.jsx'

function App() {
  return <>
    <div className="min-h-[600px] w-[380px] bg-[rgb(21,39,63)] rounded-2xl p-6">
      <ImageContainer/>
      <Details/>
    </div>
  </>
}

export default App