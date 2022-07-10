if (Persistence.isAvailable()) {
	replacement = Persistence.getItem();
}
var pronouns = document.getElementsByClassName("cloze_pronoun");
pronouns[0].innerHTML = replacement;
Persistence.clear();
