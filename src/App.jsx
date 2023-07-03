import { Post } from './components/Post.jsx';
import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar.jsx';

import './global.css'
import AppCSS from './App.module.css';

export function App() {
  return (
   <div>
    <Header />
    <div className={AppCSS.wrapper}>
      <Sidebar/>
      <main>
        <Post/>
        <Post/>
      </main>
    </div>
   </div> 
  )
}
