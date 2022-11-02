import { Outlet, Link, useLocation } from 'react-router-dom'
// outlet is like a dynamic container

function layout() {
  const location = useLocation()
  const { pathname } = location;
  
  return (
    <div className="md:flex md:min-h-screen">
      <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
        <h1 className='text-4xl font-black text-center text-white'>CRM - Clients</h1>

        <nav className='mt-10'>
          <Link className=
          {`${pathname === '/' ? 'text-blue-400' : 'text-white'} text-xl block mt-2 hover:text-blue-400 hover:scale-105 ease-in-out duration-300`} to='/'>
            Clients
          </Link>
          <Link className={`${pathname === '/clients/new' ? 'text-blue-400' : 'text-white'} text-xl block mt-2 hover:text-blue-400 hover:scale-105 ease-in-out duration-300`} to='/clients/new'>New Client</Link>
        </nav>
      </aside>

      <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
        <Outlet/>
      </main>
    </div>
  )
}

export default layout