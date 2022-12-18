import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from "../Providers/Store"

export default function Category() {
    const [articles, setArticles] = useState([])
    const [AllArticles, getAllArticles] = useState('all')

    function displayCategory(){

        fetch('http://edu.project.etherial.fr/articles').then((res) => {
            res.json().then((json) =>{
                console.log(json.data)
                setArticles(json.data)
            })
        })
    
    }

    useEffect(() => {
        displayCategory()

    }, [])
     

    return (


        <main className="w-full">
            
            <p className="flex text-4xl mb-8 ml-3 mt-6 font-bold justify-center ">Choisir l'article selon la catégorie :</p>
        <>
            <div className="flex mb-10 gap-6 justify-center">
                <button className="mr-4 p-4 bg-slate-900 w-32 rounded-b font-bold text-slate-200 hover:bg-blue-600 ease-linear" onClick={() => {getAllArticles('all')}}> ALL Articles </button>
                <button className="mr-4 bg-slate-900 w-32 rounded-b font-bold text-slate-200 hover:bg-blue-600" onClick={() => {getAllArticles('DEV')}} > DEV</button>
                <button className="mr-4 bg-slate-900 w-32 rounded-b font-bold text-slate-200 hover:bg-blue-600" onClick={() => {getAllArticles('ART')}}> ART</button>
                <button className="mr-4 bg-slate-900 w-32 rounded-b font-bold text-slate-200 hover:bg-blue-600" onClick={() => {getAllArticles('BIZ')}}> BIZ</button>
            </div>

            <h1 className="flex text-3xl font-bold mb-8 ml-8 text-purple-900 underline ">Liste des Articles :</h1>                                                                    
            {
              //filtrer les articles selon la categorie  
            articles.map((article) => {

                if(article.ArticleCategory.name === AllArticles || AllArticles === 'all'){

                    return (
                        <Link to={`/article/detail/${article.id}`}  key={article.id} state={{ article: article }}>

                            <div className="flex">
                                <div   className=" flex flex-col gap-4 mb-22 rounded-3xl p-9">  
                                    <h2 className=" rounded flex   pb-4 text-2xl font-bold uppercase "> {article.title} </h2>
                                    <h3> <span className="font-bold">Content :</span> {article.content}</h3>
                                    <h4> <span className="font-bold">catégory :</span>  {article.ArticleCategory.name}</h4>
                                    <h4> <span className="font-bold">created_at :</span>  {article.created_at}</h4>
                                    <h3 ><span className="font-bold">Auteur :</span>  {article.User.firstname + ' '+ article.User.lastname}</h3>
                                </div>
                                
                            </div>
                            <hr className="border-2 bg-blue-700 "></hr>
                        </Link>
                    )

                }
            })}
        </>
        </main>
    )
    
}