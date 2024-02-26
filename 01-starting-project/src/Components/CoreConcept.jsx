export default function CoreConcept(prop) {
    return (
      <li>
        <img src={prop.image}></img>
        <h3>{prop.title}</h3>
        <p>{prop.description}</p>
      </li>
    );
  }
  