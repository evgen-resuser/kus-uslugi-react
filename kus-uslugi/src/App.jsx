import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import CatsList from "./components/CatList.jsx";

function App() {
    return (
        <>
            <Header isVisible={false}/>
            <Main />
            <h2>Познакомьтесь с нашими клиентами!</h2>
            <CatsList />
        </>
    )
}
export default App
