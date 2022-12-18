import { StoreContext } from '../Providers/Store';
import { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/20/solid'

export default function Login(props) {

    const { token, setToken } = useContext(StoreContext);

    const { register, handleSubmit} = useForm();

    const navigate = useNavigate();

    useEffect(() => {

        if (token) {
            navigate('/');
        }

    }, [token]);

    const onSubmit = (data) => {
        fetch('http://edu.project.etherial.fr/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        }).then((res) => {
            res.json().then((json) => {
                if (json.data.token) {
                    localStorage.setItem('token', json.data.token);
                    setToken(json.data.token);
                    alert('Connexion Réussie');
                } else {
                    alert('Email où le Mot de passe incorrect');
                }
            });
        });
    };

    return (

          <div className="flex min-h-full items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
               
                <h2 className="mt-12 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
              
              </div>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <label  className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email address"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div>
                    <label className="sr-only">
                      Password
                    </label>
                    <br></br>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                      {...register("password", { required: true })}
                    />
                  </div>
                </div>
    
                <div>
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                    </span>
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        
      )
    



}
