import styles from "./App.module.scss";

import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
    <main className={styles.main}>
    <NavBar />
    <div className={styles.cardArea}>

    </div>
    </main>
    </>  
  );
}

export default App;
