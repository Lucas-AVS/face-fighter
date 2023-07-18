import SidebarCSS from './Sidebar.module.css';
import  { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <div className={SidebarCSS.sidebar}>
            <img 
                className={SidebarCSS.cover} 
                src="https://i.ytimg.com/vi/oFJUlO90SaA/maxresdefault.jpg" alt="" />
            <div className={SidebarCSS.profile}>
                <img 
                    className={SidebarCSS.avatar} 
                    src="https://www.fightersgeneration.com/np2/char1/akuma-3rd.jpg" alt=""/>
                <h1>Gouki</h1>
                <p>Great Demon</p>
            </div>
            <div className={SidebarCSS.bar}></div>
            <footer className={SidebarCSS.footer}>
                <a href='#'> 
                    <PencilLine size={20}/> 
                    Edit fighter profile
                </a>
            </footer>
        </div>
    )
}
