// ─── SCROLL REVEAL ───
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  }),
  { threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// ─── RPG CHARACTER CREATOR ───
function runRpg() {
  const name = document.getElementById('rpg-name').value;
  const str  = parseInt(document.getElementById('rpg-str').value);
  const int_ = parseInt(document.getElementById('rpg-int').value);
  const cha  = parseInt(document.getElementById('rpg-cha').value);
  const full = '●', empty = '○';

  if (!name)              return show('❌ The character should have a name', true);
  if (name.length > 10)   return show('❌ The character name is too long', true);
  if (name.includes(' ')) return show('❌ The character name should not contain spaces', true);
  if ([str, int_, cha].some(isNaN))        return show('❌ All stats should be integers', true);
  if ([str, int_, cha].some(s => s < 1))   return show('❌ All stats should be no less than 1', true);
  if ([str, int_, cha].some(s => s > 4))   return show('❌ All stats should be no more than 4', true);
  if (str + int_ + cha !== 7)              return show(`❌ Stats sum to ${str + int_ + cha}, but need to sum to 7`, true);

  const bar = v => full.repeat(v) + empty.repeat(10 - v);
  show(`${name}\nSTR ${bar(str)}\nINT ${bar(int_)}\nCHA ${bar(cha)}`, false);
}

function show(msg, isError) {
  const el = document.getElementById('rpg-output');
  el.textContent = msg;
  el.style.color = isError ? '#f05a7e' : '#4ef0c4';
}
