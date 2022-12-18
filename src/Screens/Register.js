import { StoreContext } from '../Providers/Store';
import { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { Container } from 'postcss';

export default function Register(props) {

    const { register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        fetch('http://edu.project.etherial.fr/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: data.password,
                password_verif: data.password_verif
            })
        }).then((res) => {
            res.json().then((json) => {
                if (json.data) {
                    alert('Le Compte a bien été créé');
                } else {
                    alert('Erreur lors de la création de votre compte');
                }
            });
        });
    };

    return (

        <>
       <h1 className="text-center mt-5 mb-8 font-extrabold text-3xl">Welcome to page Register</h1>
        <main className="flex min-h-full items-center justify-center py-5 px-4 sm:px-6 lg:px-8">
           
        <form className="mt-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className="inline-block  text-black text-xl font-bold mb-2" >
                    Prénom :
                </label>
                
                <input
                    className=" ml-20 w-96 border rounded py-2 px-3 focus:outline-none focus:shadow-outline"
                    id="firstname"
                    type="text"
                    placeholder="Entrez votre prénom"
                    {...register("firstname", { required: true })}
                />
               
            </div>
            <br></br>
            <div>
                <label className="inline-block text-black text-xl font-bold mb-2">
                    Nom :
                </label>
                
                <input
                    className=" ml-24 w-96 border rounded py-2 px-3 focus:outline-none focus:shadow-outline"
                    id="lastname"
                    type="text"
                    placeholder="Entrez votre nom"
                    {...register("lastname", { required: true })}
                />
                
            </div>
            <br></br>
            <div>
                <label className="inline-block text-black text-xl font-bold mb-2">
                    Email :
                </label>
             
                <input
                    className="ml-24 w-96 border rounded py-2 px-3 focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Entrez votre email"
                    {...register("email", { required: true })}
                />
               
            </div>
            <br></br>
            <div>
                <label className="inline-block text-black text-xl font-bold mb-2" >
                    Mot de passe :
                </label>
                
                <input
                    className="ml-8 w-96 border rounded py-2 px-3 focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Entrez votre mot de passe"
                    {...register("password", { required: true })}
                />
                
            </div>
            <br></br>
            <div>
                <label className="inline-block text-black text-xl font-bold mb-2" >
                    confirmer le mot de passe :
                </label>
                
                <input
                    className="ml-8 w-96 border rounded py-2 px-3 focus:outline-none focus:shadow-outline"
                    id="password_verif"
                    type="password"
                    placeholder="Entrez à nouveau votre mot de passe"
                    {...register("password_verif", { required: true })}
                />
             
            </div>
            <br></br>
            <div className="mb-3 text-center">
            <button
            type="submit"
            className="group relative text-xl flex ml-40 w-72 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 mt-7  font-bold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="absolute text-xl inset-y-0 left-0 flex items-center pl-3  ">
            </span>
            Register
          </button>
            </div>
        </form>
    </main>    
    </>


    );

}
