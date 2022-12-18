import { StoreProvider } from './Providers/Store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Screens/Register';
import Login from './Screens/Login';
import Navbar from './Components/Navbar';
import DetailArticle from './Screens/DetailArticle';
import Home from './Screens/Home';
import CreateArticle from './Screens/CreateArticle';
import Footer from './Components/Footer';




function App() {

    return (
        <StoreProvider>
            <BrowserRouter>
                <div className=' pb-3'>
                    <Navbar />
                    <Routes>

                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/article/detail/:id" element={<DetailArticle />} />
                        <Route path="/articles/create" element={<CreateArticle />} />
                       
                    </Routes>
                    
                </div>
                
            </BrowserRouter>
            <Footer />
        </StoreProvider>
        
    );

}

export default App;
