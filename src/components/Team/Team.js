import './Team.css';
import member1 from "./images/member1.jpg";
import member2 from "./images/member2.jpg";
import member3 from "./images/member3.jpg";
import member4 from "./images/member4.jpg";

function Team() {
	return (
		<div id="team">
			<h2>Команда</h2>
			<p>Не стоит прогибаться под изменчивый мир</p>
			<div class="member">
				<img src={member1} />

				<h3>Слава Федоров</h3>
				<p class="position">Директор</p>
				<p class="description">Люблю создавать технологичные продукты и выводить их на новые рынки.</p>
				<a href="mailto:abc@gmail.ru">Напиши мне</a>
			</div>
			<div class="member">
				<img src={member2} />
				<h3>Яна Мищенко</h3>
				<p class="position">Дизайнер</p>
				<p class="description">Не мыслю своей жизни без дизайна, мне больно, когда я вижу что-то некрасивое.</p>
				<a href="mailto:abc@gmail.ru">Напиши мне</a>
			</div>
			<div class="member">
				<img src={member3} />
				<h3>Иннокентий Петрович</h3>
				<p class="position">Директор по безопасности</p>
				<p class="description">Мимо меня и муха не проскочит, не то что хакер по WiFi подключится.</p>
				<a href="mailto:abc@gmail.ru">Напиши мне</a>
			</div>
			<div class="member">
				<img src={member4} />
				<h3>Эдуард Долотин</h3>
				<p class="position">Front-end разработчик</p>
				<p class="description">Обожаю front-end разработку и создавать продукты, которыми пользуются люди.</p>
				<a href="mailto:abc@gmail.ru">Напиши мне</a>
			</div>
		</div>
	);
}

export default Team;
