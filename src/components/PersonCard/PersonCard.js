import './PersonCard.css';

function PersonCard(props) {
  return (
    <div class="member">
		<img src={props.imgSrc}/>
		<h3>{props.fullName}</h3>
		<p class="position">{props.position}</p>
		<p class="description">{props.description}</p>
		<a href="mailto:abc@gmail.ru">Напиши мне</a>
	</div>
  );
}

export default PersonCard;
