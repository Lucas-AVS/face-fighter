import { useState } from 'react';

import { Comment } from './Comment.jsx';
import { Avatar } from './Avatar';

import PostCSS from './Post.module.css'

export function Post({ author, publishedAt, content }) {

    // função para mostrar o tempo que passou desde a postagem
    function timeSince(date) {

        var seconds = Math.floor((new Date() - date) / 1000);
  
        var interval = seconds / 31536000;
  
       if (interval > 1) {
      return Math.floor(interval) + " anos";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
      return Math.floor(interval) + " meses";
        }
        interval = seconds / 86400;
        if (interval > 1) {
      return Math.floor(interval) + " dias";
        }
        interval = seconds / 3600;
        if (interval > 1) {
      return Math.floor(interval) + " horas";
        }
        interval = seconds / 60;
        if (interval > 1) {
      return Math.floor(interval) + " minutos";
        }
        return Math.floor(seconds) + " segundos";
    }
    const formattedDate = date => 
        date.toLocaleString("pt-BR", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
        })

    // comments -> Armazena a lista de comentarios
    // setComments -> Atualiza a lista de comentarios
    const [comments, setComments] = useState([
        "HAHAHA"
    ])
    
    // Armazena o novo comentario digitado pelo usuario
    const [newCommentText, setNewCommentText] = useState('')

    // Atualiza o estado de newCommentText quando o evento "onChange" ocorre
    function commentChange() {
        setNewCommentText(event.target.value)
    }

    // Adiciona o novo comentario a lista e redefine o texto com o chamado "onSubmit"
    function sendComment() {    
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    // Função usada dentro da child Comment para deletar seus comentarios
    function deleteComment(commentToDelete) {
        const noDeletedComments = comments.filter(comment => {
            return comment != commentToDelete;
            
        })
        setComments(noDeletedComments) 
    }

    return (    
        <article className={PostCSS.post}>
            <header className={PostCSS.header}>
                <div className={PostCSS.author}> 
                    <div>
                        <Avatar src={author.avatarUrl}/>
                    </div>
                    <div className={PostCSS.name}>
                        <h1>{author.name}</h1>
                        <span>{author.title}</span>
                    </div>
                </div>
                <time dateTime={publishedAt.toISOString()} title={formattedDate(publishedAt)}>
                    {timeSince(publishedAt)} atrás
                </time>
            </header>
            <div className={PostCSS.content}>
                {content.map((line) => {
                    if (line.type === 'paragraph') {
                    return <p key={line.content}>
                                {line.content}
                            </p>;
                    }
                    if (line.type === 'link') {
                    return <a 
                            key={line.content} 
                            href={line.content} 
                            target="_blank">{line.content} </a>;
                    }
                })}
            </div>
            <form onSubmit={sendComment} className={PostCSS.commentForm}>
                <strong>Compartilhe seu poder de análise</strong>
                <textarea
                    value={newCommentText}
                    onChange={commentChange}
                    placeholder='Mostre sua sagacidade em palavras!'    
                />

                {/* caso não tenha texto dentro da textarea o botão será display none */}
                {newCommentText !== '' ? (
                    <button type="submit" className="button" style={{ display: 'block' }}>
                        Comentar
                    </button>
                    ) : (
                    <button type="submit" className="button" style={{ display: 'none' }}>
                        Comentar
                    </button>
                )}
            </form>

            <div className={PostCSS.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} deleteComment={deleteComment}/>
                })}
            </div>
        </article>
    )
}