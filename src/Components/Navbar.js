import { Link } from 'react-router-dom'
import { StoreContext } from '../Providers/Store';
import { useContext } from 'react';



export default function Navbar() {

const { token, setToken } = useContext(StoreContext)

return (
        <>
        <div className='pl-8 pt-2 pb-1 bg-slate-50'>
            <ul className="flex justify-between mr-2 ">
                
                <div className='flex gap-16'>
                    <li>
                        <Link to="/" className='group relative flex w-full justify-center  bg-indigo-600 py-2 px-4 text-sm font-bold text-white hover:bg-indigo-700 '>
                            Home
                        </Link>
                    </li>
                    {token ? (
                        <li>
                            <Link to="/articles/create" className='group relative flex w-full justify-center  bg-indigo-600 py-2 px-4 text-sm font-bold text-white hover:bg-indigo-700 '>
                                Créer un article
                            </Link>
                        </li>
                    ) : null}
                </div>
                <div className='flex mr-2 mb-1'>
                    <li className=' mr-2 mb-1'>
                        <Link to="/register" className='group relative flex w-full justify-center  bg-indigo-600 py-2 px-4 text-sm font-bold text-white hover:bg-indigo-700 '>
                            Register
                        </Link>
                    </li>
                    <li >
                        {token ? (
                            <button onClick={() => {
                                localStorage.removeItem('token')
                                setToken(null)
                            }} className='group relative flex w-full justify-center  bg-indigo-600 py-2 px-4 text-sm font-bold text-white hover:bg-indigo-700 '>
                                Logout
                            </button>
                        ) : (
                            <Link to="/login" className='group relative flex w-full justify-center  bg-indigo-600 py-2 px-4 text-sm font-bold text-white hover:bg-indigo-700 '>
                                Login
                            </Link>
                        )}
                    </li>
                </div>
            </ul>
        </div>
        <hr className='border-b-2 bg-black'></hr>
        </>    
    )

}