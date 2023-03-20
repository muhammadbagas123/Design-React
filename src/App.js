
import {Col, Container, Row} from "react-bootstrap"
import './App.css';
import NavigationBar from "./components/NavigationBar"
import "./style/landingPage.css"
function App() {
  return (
    <div>
      {/* intro section */}
    <div className="myBG">
      <NavigationBar/>
      <div className="intro">
        <Container className="text-white d-flex justify-content-center align-items-center">
           <Row>
            <div id="grid">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
           </Row>
        </Container>
      </div>
    </div>
    {/* end of section */}
    </div>
  );
}

export default App;
