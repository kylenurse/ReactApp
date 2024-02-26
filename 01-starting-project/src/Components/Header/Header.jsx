import reactimg from '../../assets/react-core-concepts.png';
const descr  =  ["Hello", "Balls", "More balls"];
import './Header.css'


function getRandInt(max) {
    return Math.floor(Math.random() * (max+1));
}

export default function Header() {
    const description = descr[getRandInt(2)];
    return (
      <header>
        <img src={reactimg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>);
}

