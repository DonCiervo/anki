/*-----------------------------------------
 * Choose random audio from card
 * by J. Hirsch | @DonCiervo
-----------------------------------------*/
{
		function randomInt(max) {
			return Math.floor(Math.random() * max);
		}		

		const audios = [...document.querySelectorAll(".soundLink")];
		rand = randomInt(audios.length)
		audios[rand].click();
}
