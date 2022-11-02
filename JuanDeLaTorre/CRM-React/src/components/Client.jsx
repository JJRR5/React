const Client = ({client}) => {
    const {name, phone, email, company, id} = client

    return (
        <tr className="border-br text-center">
            <td className="p-6">
                <p className="text-xl text-gray-800">{name}</p>
            </td>
            <td className="p-6">
                <p className="text-xl text-gray-800">{phone}</p>
            </td>
            <td className="p-6">
                <p className="text-xl text-gray-800">{email}</p>
            </td>
            <td className="p-6">
                <p className="text-xl text-gray-800">{company}</p>
            </td>
            <td className="p-6 flex gap-3 justify-center">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-800 uppercase font-bold"
                >
                    Update
                </button>
                <button
                    type="button"
                    className="text-red-600 hover:text-red-800 uppercase font-bold"
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default Client