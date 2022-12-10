import './Contact.css';

function Contact() {
	return (
		<div id="contact">
			<h2 class="shy">Контакты</h2>
			<p class="shy">Не будьте скромными, пишите нам:</p>
			<p class="contact-info contact-adress">Москва, звонят колокола</p>
			<p class="contact-info contact-phone">Телефон: <a href="tel:+7(995)600-19-51">+7(995)600-19-51</a></p>
			<p class="contact-info contact-mail">Email: <a href="mailto:hello@hwschool.online">hello@hwschool.online</a></p>
			<form>
				<input placeholder="Имя" class="person" type="text" />
				<input placeholder="Email" class="person" type="text" />
				<input placeholder="Тема" class="person" type="text" />
				<input placeholder="Сообщения" class="person" type="text" />
				<input class="send" value="Отправить сообщение" type="submit" name="" />
			</form>
		</div>
	);
}

export default Contact;
