import "../App.css";
function Card(props) {
  return (
    <div className="box">
      <h4>{props.title}</h4>
      <p>{props.desc}</p>
      <a href="#home">
        View More
        <img src="./images/btn-arrow.svg" alt="" />{" "}
      </a>
    </div>
  );
}

export default Card;
