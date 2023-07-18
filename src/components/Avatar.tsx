import styles from "./Avatar.module.css";

interface AvatarProps {
    hasBorder?: boolean;
    src: string;
    className?: string;
    alt?: string;
  }

export function Avatar({ hasBorder = true, src }: AvatarProps) {
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