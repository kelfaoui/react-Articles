import { StoreContext } from '../Providers/Store';
import { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/20/solid'



export default function ArticleCreate() {

    const { token, categories } = useContext(StoreContext);

    const { register, handleSubmit} = useForm();

    const navigate = useNavigate();

  
    const onSubmit = (data) => {
        fetch('http://edu.project.etherial.fr/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                title: data.title,
                content: data.content,
                article_category_id: data.category
            })
        }).then((res) => {
            res.json().then((json) => {
                if (json.data) {
                    navigate('/articles/' + json.data.id);
                }
            });
        });
    };

    return (
        <>
        <h1 className="text-center mt-16 font-extrabold text-4xl">Creer votre article :</h1>

        <div className="flex min-h-full items-center justify-center py-6 px-4 sm:px-6 lg:px-8">

        <form className="mt-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className="block text-black text-xl font-bold mb-2" >
                    Titre :
                </label>
                <input
                    className="w-96 border rounded py-2 px-3 "
                    id="title"
                    type="text"
                    placeholder="Entrez le titre de l'article"
                    {...register("title", { required: true })}
                />
              
            </div>
            <div className>
                <label className="block text-black text-xl  font-bold mb-2">
                   Category :
                </label>
                <select
                    className="w-96 border rounded py-2 px-3 font-bold "
                    id="category"
                    {...register("category", { required: true })}
                >
                    //filtrer afin de choisir la categorie
                    {
                        categories.map((category) => {
                            return (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            );
                        })
                    }
                </select>
               
            </div>

            <div className="w-full">
                <label className="block text-black text-xl  font-bold mb-2" >
                    Contenu de l'article :
                </label>
                <textarea
                    className="w-full h-44   border rounded py-2 px-3 "
                    id="content"
                    type="text"
                    placeholder="Entrez le contenu de l'article"
                    {...register("content", { required: true })}
                />
               
            </div>
          
            <div className="mb-6 text-center">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-noneow-outline"
                    type="submit"
                >
                    Enregister
                </button>
            </div>
        </form>
    </div>   
    </> 
    )

}