import Header from "./components/Header"
import Form from "./components/Form"
import ListPatients from "./components/ListPatients"

function App() {

  return (
    <div className="container mx-auto mt-14">
      <Header />
      <div className="mt-12 grid md:grid-cols-2 text-center">
        <Form />
        <ListPatients />
      </div>
    </div>
  )
}

export default App
