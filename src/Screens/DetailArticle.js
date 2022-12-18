import { useState, useEffect } from "react"
import { StoreContext } from '../Providers/Store';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function ArticleDetail() {

    let location = useLocation()
    let navigate = useNavigate()
    let [article, setArticle] = useState(null)
    const params = useParams();
    console.log(params)


    useEffect(() => {

        if (location && location.state && location.state.article) {
            setArticle(location.state.article)
        } else {
            navigate("/")
        }

    }, [])

    if (article) {
        return (
            <div className=" flex justify-center h-full">
                <div key={article.id} className="  flex flex-col  mt-8">  
                    <h1 className="flex justify-center font-bold pt-6 pb-12 text-3xl uppercase text-red-600"> {article.title}</h1>
                    <h3><span className=" inline-block font-bold pt-12 p-5 text-xl "> Content : {article.content}</span></h3>
                    <h3 className="inline-block pt-12 p-5 text-xl "><span className="font-bold ">Category  : {article.ArticleCategory.name}</span></h3>
                    <h3 className="inline-block pt-12 p-5 text-xl "><span className="font-bold ">Created_at  : {article.created_at}</span></h3>
                    <h2 className="inline-block p-5 pt-12 font-bold text-xl ">Auteur : {article.User.firstname + ' '+ article.User.lastname}</h2>
                </div>
            </div>
            )
        
    } else {
        return (<p>
            Error d'affichage de l'article
        </p>)
    }
}