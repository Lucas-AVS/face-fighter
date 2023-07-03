import { ThumbsDown, ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.commentContainer}>
            <Avatar
                className={styles.avatar}
                hasBorder={false}
                src="https://store.playstation.com/store/api/chihiro/00_09_000/container/TR/tr/99/EP0700-CUSA06014_00-AV00000000000002/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=90&h=90"
                alt=""
                />
                
            <div className={styles.contentContainer}>
                
                <div className={styles.commentBox}>
                    
                    <header className={styles.commentHeader}>
                        
                        <div className={styles.authorAndTime}>
                            
                            <h1 className={styles.authorName}>Heihachi Mishima</h1>
                            
                            <time
                                className={styles.timeStamp}
                                dateTime="2023-06-23 20:13:30"
                                title="data de púb">
                                Cerca de 2h
                            </time>            
                        
                        </div>
                        
                        <button className={styles.deleteButton}>
                            <Trash size={24} />
                        </button>
                    </header>
                    
                    <div className={styles.commentContent}>
                        <p>Akuma, você acha mesmo que seu punho demoníaco é ameaçador? Deixe-me rir! Enquanto você se perde nas trevas, eu sigo sendo o verdadeiro mestre das artes marciais.</p>
                        <p>Venha, desafie-me se tiver coragem. Vou te mostrar o que é sentir o poder do Mishima Zaibatsu em uma surra que vai te deixar de joelhos! 💥🔥👊</p>
                    </div>
                </div>

                <div className={styles.likeDislikeSection}>
                        <a href='#' className={styles.like}> 
                            <ThumbsUp size={20}/> 
                            Aplaudir 
                            <span>01</span>
                        </a>
                        <a href='#' className={styles.dislike}> 
                            <ThumbsDown size={20}/> 
                            Vaiar 
                            <span>12</span>
                        </a>
                </div>

            </div>


        </div>
    )
} 