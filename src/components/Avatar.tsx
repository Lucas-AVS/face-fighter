import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
    className?: string;
  }

export function Avatar({ hasBorder = true, className, ...props}: AvatarProps) {
    console.log({...props})
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
        />
    )
}


// Também pode ser feito com:
//     const hasBorder = props.hasBorder != false;
// antes do return