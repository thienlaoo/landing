import './App.scss'
import {Header} from "./Components/Header/Header.jsx";
import {MainContent} from "./Components/MainContent/MainContent.jsx";
import {About} from "./Components/About/About.jsx";
import {FromCreator} from "./Components/FromCreator/FromCreator.jsx";
import {Benefits} from "./Components/Benefits/Benefits.jsx";

function App() {

    return (
        <>
            <Header/>
            <MainContent/>
            <About/>
            <FromCreator/>
            <Benefits/>
        </>
    )
}

export default App
