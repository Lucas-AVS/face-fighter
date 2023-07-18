import HeaderCSS from './Header.module.css';
import IgniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={HeaderCSS.header}>
            <img src={ IgniteLogo } alt="logotipo do ignite" />
            <div>FaceFighter</div>
        </header >
    )
}
