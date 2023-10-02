import './App.css';
import { Routes, Route } from "react-router-dom"
import Layout from './Layout';
import IndexPage from './Pages/IndexPage';
import Login from './Pages/Login';
import Register from "./Pages/Register";
import { UserContextProvider } from './UserContext';
import CreatePost from './Pages/CreatePost';
import PostPage from './Pages/PostPage'
import EditPost from './Pages/EditPost';

function App() {
   return (
      <UserContextProvider>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={<IndexPage />}></Route>
               <Route path={'/login'} element={<Login />}> </Route>
               <Route path={'/Register'} element={<Register />}></Route>
               <Route path={'/createnewpost'} element={<CreatePost />}></Route>
               <Route path={'/post/:id'} element={<PostPage />}></Route>
               <Route path={'/post/:id/edit/:id'} element={<EditPost />}></Route>
            </Route>
         </Routes>
      </UserContextProvider>
   );
}

export default App;
