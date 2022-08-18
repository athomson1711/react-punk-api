import styles from "./App.module.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faOpenHeart } from "@fortawesome/free-regular-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import UserProvider from "./provider/UserProvider/UserProvider";

library.add(faOpenHeart, faHeart);

const App = () => {
  return (
    <>
      <UserProvider />
    </>
  );
}

export default App;
