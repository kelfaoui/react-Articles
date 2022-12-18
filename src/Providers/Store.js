import { createContext, useEffect, useState } from "react";



export const StoreContext = createContext()

export function StoreProvider(props) {

    const [token, setToken] = useState( localStorage.getItem('token') ? localStorage.getItem('token') : null)

    const [articles, setArticles] = useState([])

 // get All articles
    function getAllArticles() {
        fetch('http://edu.project.etherial.fr/articles').then((res) => {
            res.json().then((json) => {
                if (json.data) {
                    setArticles(json.data); 
                }
            });
        });
    }
// category part

    const [Category, setCategory] = useState([])
    const [currentCategory, setCurrentCategory] = useState(0)

    function getAllCategory() {
        fetch('http://edu.project.etherial.fr/articles/categories').then((res) => {
            res.json().then((json) => {
                if (json.data) {
                    setCategory(json.data);
                }
            });
        });
    }

    useEffect(() => {

        getAllArticles();
        getAllCategory();

    }, [])

 
    useEffect(() => {

        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }

    }, [token])

    return (
        <StoreContext.Provider value={{
            token: token, setToken: setToken,
            articles: articles, setArticles: setArticles,
            categories: Category, setCategory: setCategory,
            currentCategory: currentCategory, setCurrentCategory: setCurrentCategory
        }}>
            {props.children}
        </StoreContext.Provider>
    )

}