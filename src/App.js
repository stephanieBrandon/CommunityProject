import './App.css';
import { ApplForm } from "./ApplForm/ApplForm";
import { PresentSlides } from './PresentSlides/PresentSlides';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <>
    <div class="container">
    <div className="App">
    <br />
    <br />
    <br />

      <h1 id="bak">The Community Project</h1>
      <br />
      <br />
      <PresentSlides />
      <ApplForm />
      <br />
      <h6>&copy; Stephanie Brandon</h6>
    </div>
    </div>
    </>
  );
}

export default App;
