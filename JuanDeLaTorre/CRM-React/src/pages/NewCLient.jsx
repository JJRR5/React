//Use navigate => is used to navigate between pages
import { useNavigate, Form as RouterForm } from 'react-router-dom'
//Form from react-router-dom is a new component that handles the http verbs
import Form from '../components/Form';

//this function will send all the data
export function action() {

}


function NewCLient() {

  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New Client</h1>
      <p className="mt-3">Fill the form to add a new client</p>

      <div className="flex justify-end my-5">
        <button
          className='bg-blue-800 text-white px-4 py-2 font-bold uppercase hover:scale-105 ease-in-out duration-300 rounded hover:bg-blue-600'
          onClick = {() => navigate('/') } //-1 used as a parameter returns to te previous page
        >
          Back
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
        <RouterForm 
          method = 'POST'

        >
          <Form />
          <input 
            type="submit"
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg hover:scale-105 ease-in-out duration-300 rounded hover:bg-blue-600'
          />
        </RouterForm>
      </div>
    </>
  )
}

export default NewCLient