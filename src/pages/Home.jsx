import React from "react";

import "../css/Page.css";

import "../css/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Page">
      <div className="Panel mebglmao BottomSeparator">
        <div className="container">
          <h1 className="bigtext">Are you looking for:</h1>
          <h1 className="bigtext">
            a <span className="bigtext colored">Unity</span> Developer?
          </h1>
          <h1 className="bigtext">
            a <span className="bigtext colored">Java</span> Developer?
          </h1>
          <h1 className="bigtext">
            a <span className="bigtext colored">NodeJS</span> Developer?
          </h1>
          <Link className="contactMebutton" to="/contact">
            Contact Me
          </Link>
        </div>
      </div>
      <div className="Panel BottomSeparator parent">
        <div className="container small">
          <h1 className="title">- aboutme -</h1>
          <div className="container">
            <h2 className="paragraph alignleft">
              My name is Franciszek Rakowiecki, and I am a bilingual unity
              developer based in Europe. I also have experience with NodeJS and
              Java development. I enjoy working towards learning something new
              and have fun overcoming challenges.
              <br></br>
              <br></br>I have a deep passion for game development and I love
              doing it. I love to create interesting mechanics that test my
              thinking.
              <br></br>
              <br></br>I also enjoy dealing with complex mathematical objectives
              and implementing physical rules into the virual worlds. Such
              things like a collision system, real time simulation can be time
              consuming but fun to understand and create.
            </h2>
            <Tagbar
              tags={[
                "Unity",
                "React",
                "C#",
                "JS",
                "NodeJS",
                "Networking",
                "TCP",
                "UDP",
                "JSON",
                "2D",
                "3D",
              ]}

              links={[
                {
                  name: "GitHub",
                  link: "https://github.com/jqsx"
                }
              ]}
            />
          </div>
        </div>
        <div className="mepic"></div>
      </div>
      <div className="Panel">
        <div className="container">
          <h1 className="title">- projects -</h1>
          <div className="container flex wide parent">
            <div className="container">
              <h1 className="title">WNJO</h1>
              <h2 className="paragraph">
                Wnjo a 2D scroller survival game in the browser. A game that I
                challanged myself to make as a learning experience coded in java
                script with a physics, rendering and websocket multiplayer
                solution.
              </h2>
              <div className="container flex">
                <div className="image wnjo"></div>
              </div>
              <Tagbar tags={["Web", "WebSockets", "Multiplayer", "JS", "2D"]} links={[{link: "https://github.com/jqsx/WNJo2", name: "GitHub"}]} />
            </div>
            <div className="container">
              <h1 className="title">Procedural Generation</h1>
              <h2 className="paragraph">
                My procedural generation prototype featuring 3D generated chunk
                world, as a test for the implementation of perlin noise.
              </h2>
              <div className="container flex">
                <div className="image"></div>
              </div>
              <Tagbar tags={["Unity", "C#", "3D", "Procedural Generation"]} links={[{link: "https://github.com/jqsx/procedural-generation", name: "GitHub"}]} />
            </div>
            <div className="container">
              <h1 className="title">Prototype</h1>
              <h2 className="paragraph">
                My current project currently without a name, a 2D rougelike game
                deriving most of the gameplay from procedurally generated
                content.
              </h2>
              <div className="container flex">
                <div className="image"></div>
              </div>
              <Tagbar tags={["Unity", "C#", "2D", "Procedural Generation"]} links={[{link: "https://github.com/jqsx/prototypes", name: "GitHub"}]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TAG(props) {
  return <p className="tag">{props.name}</p>;
}

export function TagLink(props) {
  return <a href={props.link} className="tag linked">{props.name}</a>;
}

export function Tagbar(props) {
  const tags = [];
  props.tags.forEach((element) => {
    tags.push(<TAG name={element} />);
  });
  if (props["links"])props.links.forEach(element => {
    tags.push(<TagLink link={element.link} name={element.name} />);
  });
  return <div className="container flex">{tags}</div>;
}

export default Home;
