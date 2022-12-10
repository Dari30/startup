import './Prices.css';

function Prices() {
  return (
    <div id="prices">

	<h2>Тарифы</h2>

	<p id="pay">Платите нам столько, сколько хотите. Главное платите :-)</p>

	
	<ul class="tariff">

	<li class="tariff-name">Базовый</li>

	<li><span class="important">10</span> лайков</li>

	<li><span class="important">10</span> репостов</li> 

	<li><span class="important">10</span> комментариев</li>

	<li><span class="important">И еще важный</span> пункт</li>

	<li> <p class="price">25 рублей</p>

	<p class="period">в день</p> </li>

	<li> <a href="#">Купить</a> </li>

	</ul> 
	<ul class="tariff">

	<li class="tariff-name best">Про</li>

	<li><span class="important">20</span> лайков</li>

	<li><span class="important">20</span> репостов</li> 

	<li><span class="important">20</span> комментариев</li>

	<li><span class="important">Тоже важный пункт</span> пункт</li>

	<li> <p class="price">50 рублей</p>

	<p class="period">в день</p> </li>

	<li> <a href="#">Купить</a> </li>

	</ul> 
	<ul class="tariff">

	<li class="tariff-name">Премиум</li>

	<li><span class="important">50</span> лайков</li>

	<li><span class="important">50</span> репостов</li> 

	<li><span class="important">50</span> комментариев</li>

	<li><span class="important">Мега важный  пункт</span> пункт</li>

	<li> <p class="price">100 рублей</p>

	<p class="period">в день</p> </li>

	<li> <a href="#">Купить</a> </li>

	</ul> 
</div>
  );
}

export default Prices;
