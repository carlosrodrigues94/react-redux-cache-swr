import { Provider } from "react-redux";
import store from "./store";
import { Router } from "react-router-dom";
import history from "./services/history";
import { Routes } from "./routes";
import "./global.scss";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
