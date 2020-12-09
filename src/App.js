import { Provider } from "react-redux";
import "./App.css";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">React</header>
        <PostForm />
        <hr></hr>
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
