import './Team.css';
import member1 from "./images/member1.jpg";
import member2 from "./images/member2.jpg";
import member3 from "./images/member3.jpg";
import member4 from "./images/member4.jpg";
import PersonCard from '../PersonCard/PersonCard';

function Team() {
	return (
		<div id="team">
			<h2>Команда</h2>
			<p>Не стоит прогибаться под изменчивый мир</p>
			<PersonCard imgSrc={member1} fullName="Слава Федоров" position="Директор" description="Люблю создавать технологичные продукты и выводить их на новые рынки."/>
			<PersonCard imgSrc={member2} fullName="Яна Мищенко" position="Дизайнер" description="Не мыслю своей жизни без дизайна, мне больно, когда я вижу что-то некрасивое."/>
			<PersonCard imgSrc={member3} fullName="Иннокентий Петрович" position="Директор по безопасности" description="Мимо меня и муха не проскочит, не то что хакер по WiFi подключится."/>
			<PersonCard imgSrc={member4} fullName="Эдуард Долотин" position="Front-end разработчик" description="Обожаю front-end разработку и создавать продукты, которыми пользуются люди."/>
		</div>
	);
}

export default Team;
