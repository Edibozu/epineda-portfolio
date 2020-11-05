import Header from "./components/Header/Header";
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import Footer from "./components/Footer/Footer"
import Wrapper from "./components/Wrapper/Wrapper"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
          <Header />
          <Wrapper>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/Projects" component={Projects} />
        </Wrapper>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
