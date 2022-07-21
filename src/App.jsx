import styles from "./App.module.scss";

import NavBar from "./components/NavBar";
import CardArea from "./components/CardArea";

const App = () => {
  return (
    <>
    <main className={styles.main}>
    <NavBar />
    <CardArea />
    
    </main>
    </>      
  );
}

export default App;
