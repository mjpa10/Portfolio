import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from '@/assets/icons/star.svg';
import BookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import Map from "@/assets/images/map.jpg";
import SmileEmoji from "@/assets/images/SmileEmoji.png";
import {CardHeader} from "@/components/CardHeader";


const tollboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
];
const hobbies = [
  {
    title: 'Jogar',
    emoji: '🎮',
  },
  {
    title: 'Treinar',
    emoji: '🏋🏻',
  },
  {
    title: 'Filmes',
    emoji: '🎬',
  },
  {
    title: 'Comer',
    emoji: '🍔',
  },
  {
    title: 'Escutar musica',
    emoji: '🎶',
  }, 
  {
    title: 'estudar',
    emoji: '📚',
  },
  {
    title: 'animais',
    emoji: '🐶',
  },
]
export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
      <SectionHeader 
      eyebrow="Sobre mim" 
      title="A Glimpse Into My World"
       description="Aprenda mais sobre quem eu sou,o que faço e o que me inspira "
       />
       <div className="mt-20">
        <Card className="h-[320px]">
        <CardHeader 
        title="My Reads" 
        description="explore the books shaping my perpectives"
        />         
          <div className="w-40 mx-auto mt-8">
          <Image src={BookImage} alt="book cover"/>
          </div>
        </Card>
        <Card>
          <CardHeader
           title="My Tollbox" 
           description="EXplorre the technologies and tools i use to craft excepcional experiences"
           />
          <div>
            {tollboxItems.map(item => (
              <div key={item.title}>
                <TechIcon component={item.iconType}/>
                <span>{item.title}</span>
              </div>
            ))}
          </div>         
        </Card>
          <Card>
          <CardHeader
           title="Beyond the code" 
           description="Explore myn interets and hobbies beyonde the"
           />
          <div>
            {hobbies.map(hobby => (
              <div key={hobby.title}>
                <span>{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))}
          </div>
          </Card>
            <Card>
            <Image src={Map} alt="map"/>
            <Image src={SmileEmoji} alt="smile"/>
            </Card>
       </div>
       </div>   
    </div>
  );
};
