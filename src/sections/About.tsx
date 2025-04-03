import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import BookImage from "@/assets/images/book-cover.png";
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
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const tollboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];
const hobbies = [
  {
    title: "Jogar",
    emoji: "🎮",
    left: "4%",
    top: "70%",
  },
  {
    title: "Treinar",
    emoji: "🏋🏻",
    left: "50%",
    top: "15%",
  },
  {
    title: "Filmes",
    emoji: "🎬",
    left: "15%",
    top: "20%",
  },
  {
    title: "Comer",
    emoji: "🍔",
    left: "60%",
    top: "45%",
  },
  {
    title: "Escutar musica",
    emoji: "🎶",
    left: "5%",
    top: "0%",
  },
  {
    title: "estudar",
    emoji: "📚",
    left: "5%",
    top: "45%",
  },
  {
    title: "animais",
    emoji: "🐶",
    left: "50%",
    top: "68%",
  },
];
export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Sobre mim"
          title="A Glimpse Into My World"
          description="Aprenda mais sobre quem eu sou,o que faço e o que me inspira "
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="explore the books shaping my perpectives"
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={BookImage} alt="book cover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Tollbox"
              description="EXplorre the technologies and tools i use to craft excepcional experiences"
              className="px-6 pt-6"
            />
            <ToolboxItems items={tollboxItems} className="mt-6" />
            <ToolboxItems
              items={tollboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card className="h-[320px] p-0 flex-col flex">
            <CardHeader
              title="Beyond the code"
              description="Explore myn interets and hobbies beyonde the"
              className="px-6 py-6"
            />
            <div className="relative flex-1 ">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className="inline-flex gap-2 px-6 items-center
              bg-gradient-to-r from-emerald-300 to-sky-400 
              rounded-full py-1.5 absolute"
              style={{
                left: hobby.left,
                top: hobby.top,
              }}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative">
            <Image src={Map} alt="map" 
            className="h-full w-full object-cover"
            />
            <div className="absolute top-1/3 left-1/3
            -translate-x-1/2 -translate-y-1/2 size-20">
            <Image src={SmileEmoji} alt="me" 
            className="size-20"/>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
