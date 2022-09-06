import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "routes/Router";
import GlobalStyle from "styles/globalStyle";

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Router />
    </>
  );
};

export default App;
