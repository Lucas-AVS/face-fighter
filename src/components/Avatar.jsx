import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src}){
    return (
        <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}  
        />
    )
}


// Também pode ser feito com:
//     const hasBorder = props.hasBorder != false;
// antes do return