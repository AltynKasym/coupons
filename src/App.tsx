import "./styles/config/fonts.scss";
import "./styles/main.scss";
import AppRouter from "./components/AppRouter/AppRouter";
import AppHeader from "./components/AppHeader/AppHeader";
import AppFooter from "./components/AppFooter/AppFooter";
import FloatButton from "./components/FloatButton/FloatButton";
import {syncAllFavorites} from "./store/slices/favoriteSlice";
import {useAppDispatch} from "./hooks/reduxHook";

function App() {
  const dispatch = useAppDispatch()

  dispatch(syncAllFavorites())
  return (
    <div className="App">
      <AppHeader username={"Diafasdfrar"} />
      <AppRouter />
      <AppFooter />
      <FloatButton />
    </div>
  );
}

export default App;
