import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import MainPage from "../pages/mainPage/MainPage";
import AboutPage from "../pages/aboutPage/AboutPage";
import BlogPage from "../pages/blogPage/BlogPage";
import SingleBlogArticle from "../pages/SingleBlogArticle";


const App = () => {
   return (
      <Router>
         <div className="App">
            <main>
               <Routes>
                  <Route path='/' element={<MainPage />} />
                  <Route path='/about' element={<AboutPage />} />
                  <Route path='/blog' element={<BlogPage />} />
                  <Route path='/blog/:title' element={<SingleBlogArticle />} />
               </Routes>
            </main>
         </div>
      </Router>
   )
}

export default App;
