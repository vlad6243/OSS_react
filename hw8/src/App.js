import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import withMainLayout from './hoc/MainLayout';
import withProfileLayout from './hoc/ProfileLayout';
import Main from "./views/MainPage";
import Todo from "./views/TodoPage";
import Posts from "./views/PostsPage";
import Profile from "./views/ProfilePage";
import SingIn from "./views/SignInPage";

const MainPage = withMainLayout(Main);
const TodoPage = withMainLayout(Todo);
const PostsPage = withMainLayout(Posts);
const ProfilePage = withProfileLayout(Profile);
const SignInPage = withMainLayout(SingIn);

function App() {
    React.useEffect(() => {
        localStorage.setItem('admin', false );
    },[]);
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route path="/todo">
                    <TodoPage />
                </Route>
                <Route path="/posts">
                    <PostsPage />
                </Route>
                <Route path="/profile">
                    <ProfilePage />
                </Route>
                <Route path="/login">
                    <SignInPage />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
