import { Post } from './components/Post.tsx';
import { Header } from './components/Header.tsx';
import { Sidebar } from './components/Sidebar.tsx';

import './global.css'
import AppCSS from './App.module.css';

const post = [
  {
    id: 1,
    author: {
      coverUrl: "https://i.ytimg.com/vi/oFJUlO90SaA/maxresdefault.jpg",
      avatarUrl: 'https://www.fightersgeneration.com/np2/char1/akuma-3rd.jpg',
      name: 'Gouki',
      title: 'Great Demon',
    },
    publishedAt: new Date('2023-07-03 19:05:30'),
    content: [
      {type: 'paragraph', content : "🔥🥊 Despertando o Satsui no Hado! ⚡🔱"},
      {type: 'paragraph', content : "Preparado para encarar a fúria implacável do lendário Akuma? 💥✨ Como mestre das artes marciais, estou em busca do próximo desafio que possa testar minha força e determinação. Quem se atreve a enfrentar o poder das trevas que habita em meu interior?"},
      {type: 'paragraph', content : "Venha enfrentar o vórtice do caos e encare o verdadeiro significado da batalha! 🌪️💢 Com punhos incendiários e golpes devastadores, estou pronto para medir minha habilidade contra guerreiros corajosos."},
      {type: 'paragraph', content : "Junte-se à luta e mostre sua coragem! Encontre-me no Templo do Satsui no Hado. Seja um desafiante digno e prove seu valor!"},
      {type: 'paragraph', content : "Quem ousará enfrentar o Senhor do Punho Demoníaco? ⚔️🔥"},
      {type: 'paragraph', content : "🎮💪🌟"},
      {type: 'link', content : 'https://streetfighter.fandom.com/wiki/Akuma'},
    ],
  },

  {
    id: 2,
    author: {
      coverUrl: "https://i.ytimg.com/vi/oFJUlO90SaA/maxresdefault.jpg",
      avatarUrl: 'https://64.media.tumblr.com/9369dc7d771d577d50a4bf98e8f1e9b9/ffd04cd851527363-45/s400x600/f3bcd3d14ce37402d54f30bb7219a7f264321d46.jpg',
      name: 'Goro Majima',
      title: 'Mad Dog of Shimano',
    },
    publishedAt: new Date('2023-01-03 19:15:46'),
    content: [
      {type: 'paragraph', content : "Hey, losers! Goro Majima here, giving a shout-out to Majima Constructors."},
      {type: 'paragraph', content : "Look, if you want chaos in your construction, we've got you covered! "},
      {type: 'paragraph', content : "We demolish buildings with a bang, mix up blueprints like nobody's business, and who knows, maybe we'll even build a skyscraper in your backyard without you noticing!"},
      {type: 'paragraph', content : "We're all about surprises, baby! So, if you're ready to embrace the madness, hire Majima Constructors for a wild ride."},
      {type: 'paragraph', content : "Just don't blame me when things get... interesting."},
      {type: 'link', content : 'https://yakuza.fandom.com/wiki/Majima_Construction'},
    ],
  },
];

export function App() {
  return (
   <div>
    <Header />
    <div className={AppCSS.wrapper}>
      <Sidebar/>
      <main>
        {post.map(post => 
          <Post
            key={post.id}
            author={post.author}
            publishedAt={post.publishedAt}
            content={post.content as []}
          />
        )}
      </main>
    </div>
   </div> 
  )
}
