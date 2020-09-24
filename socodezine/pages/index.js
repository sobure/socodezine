import Launch from "../components/Launch/Launch.js";
import Nav from "../components/Nav/Nav.js";
import Sitetag from '../components/siteTag/siteTag.js'
function HomePage() {
  return(
 <>

    <Sitetag></Sitetag>
    <a href="/contact-us" className="button header w-button button">Let's talk</a>
  
    <Launch>
    </Launch>
  </>
  )
}

export default HomePage;
