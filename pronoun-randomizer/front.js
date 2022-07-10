<div id="front"></div>
<script>
var pronouns = document.getElementsByClassName("cloze_pronoun");
var arr = pronouns[0].innerHTML.split("/");
var replacement = pronouns;

Persistence.clear();
if (Persistence.isAvailable()) {
	number = Math.floor(Math.random() * arr.length);
	replacement = arr[number];
	Persistence.setItem(replacement);
}

pronouns[0].innerHTML = replacement;
</script>
