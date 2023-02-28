import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from "../pages/mainPage/MainPage";
import AboutPage from "../pages/aboutPage/AboutPage";
import BlogPage from "../pages/blogPage/BlogPage";
import Pricing from "../pages/pricingPage/PricingPage";
import TestimonialPage from "../pages/testimonialPage/TestimonialPage";
import ContactPage from "../pages/contactPage/ContactPage";
import SingleBlogArticle from "../pages/singleBlogArticle/SingleBlogArticle";

const App = () => {
   return (
      <Router>
         <div className="App">
            <main>
               <Routes>
                  <Route path='/' element={<MainPage />} />
                  <Route path='/about/' element={<AboutPage />} />
                  <Route path='/blog/' element={<BlogPage />} />
                  <Route path='/blog/:title' element={<SingleBlogArticle />} />
                  <Route path='/pricing/' element={<Pricing />} />
                  <Route path='/testimonials/' element={<TestimonialPage />} />
                  <Route path='/contact/' element={<ContactPage />} />
               </Routes>
            </main>
         </div>
      </Router>
   )
}

export default App;
