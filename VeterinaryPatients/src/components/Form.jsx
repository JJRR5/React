const Form = () => {
    return (
        <div>
            <h2 className="text-3xl font-black text-white">Patients Form</h2>
            <p className="text-white mt-3">
                Add patients and <span className="text-cyan-400 font-bold">manage them</span>
            </p>
            <form className="bg-white rounded-md mt-10 py-10 px-5 mx-5 md:mx-0">
                <div>
                    <label className="text-slate-800 font-bold text-lg" htmlFor="">Pet</label>
                    <input 
                        type="text"
                        placeholder="Pet Name"
                        className="w-full rounded-md border-gray-300 border-2 p-2 mt-2 focus-visible:outline-cyan-400"
                    />
                </div>
            </form>
        </div>
    )
}

export default Form
