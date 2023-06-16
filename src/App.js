import './App.css';
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/service/service'
import Portfolio from './components/portfolio/portfolio'
import Testimonial from './components/testimonial/testimonial'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'






function App() {

return (
    <div className="App">


< Header/>
<About/>
<Experience/><br /><br /><br /><br /><br />
<Services/>
<Portfolio/>
<Testimonial/>
<Contact/>
<Navbar/>
<Footer/>

    </div>
  );
}

export default App;
