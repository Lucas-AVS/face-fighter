import PostCSS from './Post.module.css';

import { Comment } from './Comment.jsx'
import { Avatar } from './Avatar';

export function Post() {
    return (
        <article className={PostCSS.post}>
            <header className={PostCSS.header}>
                <div className={PostCSS.author}> 
                    <div>
                        <Avatar src="https://www.fightersgeneration.com/np2/char1/akuma-3rd.jpg" alt="" srcset="" />
                    </div>
                    <div className={PostCSS.name}>
                        <h1>Gouki</h1>
                        <span>Great Demon</span>
                    </div>
                </div>
                <time dateTime='2023-06-23 20:13:30' title='data de púb'>
                    Ontem
                </time>
            </header>
            <div className={PostCSS.content}>
                <p>🔥🥊 Despertando o Satsui no Hado! ⚡🔱</p>

                <p>Preparado para encarar a fúria implacável do lendário Akuma? 💥✨ Como mestre das artes marciais, estou em busca do próximo desafio que possa testar minha força e determinação. Quem se atreve a enfrentar o poder das trevas que habita em meu interior?</p>

                <p>Venha enfrentar o vórtice do caos e encare o verdadeiro significado da batalha! 🌪️💢 Com punhos incendiários e golpes devastadores, estou pronto para medir minha habilidade contra guerreiros corajosos.</p>

                <p>Junte-se à luta e mostre sua coragem! Encontre-me no Templo do Satsui no Hado. Seja um desafiante digno e prove seu valor!</p>

                <p>Quem ousará enfrentar o Senhor do Punho Demoníaco? ⚔️🔥</p>
                
                <a href="#">#Akuma</a> <a href="#">#StreetFighter</a> <a href="#">#DesafioAceito</a> <a href="#">#MestreDasArtesMarciais</a> <a href="#">#PunhoDemoníaco</a> <a href="#">#LendaDosJogosDeLuta</a>

                <p>🎮💪🌟</p>
            </div>
            <form className={PostCSS.commentForm}>
                <strong>Compartilhe seu poder de análise</strong>
                <textarea
                    placeholder='Mostre sua sagacidade em palavras!'    
                />
                {/* fazer o botão desaparecer usando javascript */}
                <button type='submit'>Comentar</button>
            </form>

            <div className={PostCSS.commentList}>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}