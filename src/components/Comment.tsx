import { ThumbsDown, ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';
import { useState } from 'react';

export function Comment({ content, deleteComment }) {
    function handleDeleteComment() {
        deleteComment(content)
    }

    const [likeCount, setLikeCount] = useState(0)
    
    function handleLikeButton() {
        setLikeCount(likeCount + 1)
    }

    const [dislikeCount, setDislikeCount] = useState(0)

    function handleDislikeButton() {
        setDislikeCount(dislikeCount + 1)
    }

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
                        
                        <button onClick={handleDeleteComment} className={styles.deleteButton}>
                            <Trash size={24} />
                        </button>
                    </header>
                    
                    <div className={styles.commentContent}>
                        <p>{content}</p>
                    </div>
                </div>

                <div className={styles.likeDislikeSection}>
                        <button className={styles.like} onClick={handleLikeButton}>
                            <ThumbsUp size={20}/> 
                            Aplaudir 
                            <span>{likeCount}</span>
                        </button>
                        <button className={styles.dislike} onClick={handleDislikeButton}>
                            <ThumbsUp size={20}/> 
                            Vaiar 
                            <span>{dislikeCount}</span>
                        </button>
                </div>

            </div>


        </div>
    )
} 
