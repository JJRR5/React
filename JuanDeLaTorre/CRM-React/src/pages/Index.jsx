import { useLoaderData } from "react-router-dom"
import Client from "../components/Client";

export function loader() {
  const clients = [
    {
        id: 1,
        name: 'Juan',
        phone: 102013313,
        email: "juan@juan.com",
        company: 'JJRR'
    },
    {
        id: 2,
        name: 'Karen',
        phone: 138198313,
        email: "karen@juan.com",
        company: 'JJRR'
    },
    {
        id: 3,
        name: 'Josue',
        phone: 31983913,
        email: "josue@juan.com",
        company: 'JJRR'
    },
    {
        id: 4,
        name: 'Miguel',
        phone: 319381983,
        email: "miguel@juan.com",
        company: 'JJRR'
    },
    {
        id: 5,
        name: 'Pedro',
        phone: 1398198938,
        email: "pedro@juan.com",
        company: 'JJRR'
    },
  ];
  return clients;
}

function Index() {
  
  const clients = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clients</h1>
      <p className="mt-3">Manage your Clients</p>

      {clients.length > 0 ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Client</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Email</th>
              <th className="p-2">Company</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            { clients.map(client => (
              <Client
                client = {client}
                key = {client.id}
              />
            )) }
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No clients Yet</p>
      )}
    </>
  )
}

export default Index
