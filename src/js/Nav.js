import '../css/Nav.css';
import '../scripts/Nav.js';

export default function Nav() {
return(

<nav>
	<div class="dot"></div>
	<ul>
		<li class="active"><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
		<li><a href="#">Portfolio</a></li>
		<li><a href="#">Contact</a></li>
		<li><a href="#">More</a></li>
	</ul>
</nav>

);
}