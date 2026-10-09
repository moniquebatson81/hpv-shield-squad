'use strict';
(() => {
 const $ = id => document.getElementById(id);
 let level = 0, challenge = 0, score = 0, completed = 0, answered = false, sound = false, audio;
 const total = MISSIONS.reduce((sum,m) => sum + m.challenges.length,0);
 $('progress').max = total;
 function tone() {
  if (!sound) return;
  try { audio ||= new (window.AudioContext || window.webkitAudioContext)(); audio.resume().catch(()=>{});
   const osc=audio.createOscillator(), gain=audio.createGain(); osc.connect(gain); gain.connect(audio.destination);
   osc.frequency.value=660; gain.gain.setValueAtTime(.06,audio.currentTime); gain.gain.exponentialRampToValueAtTime(.001,audio.currentTime+.18); osc.start(); osc.stop(audio.currentTime+.18);
  } catch { /* Sound is optional; play continues if audio is unavailable. */ }
 }
 $('sound').onclick = () => { sound=!sound; $('sound').textContent=`Sound: ${sound?'on':'off'}`; $('sound').setAttribute('aria-pressed',String(sound)); tone(); };
 function element(tag,text,cls) { const el=document.createElement(tag); el.textContent=text; if(cls) el.className=cls; return el; }
 function focusHeading() { const h=$('stage').querySelector('h2'); h.tabIndex=-1; h.focus(); }
 function complete(message) {
  answered=true; score+=10; completed++; $('score').textContent=`${score} points`; $('progress').value=completed;
  $('feedback').textContent=message; $('next').hidden=false;
  $('next').textContent=completed===total?'Earn my shield →':challenge===MISSIONS[level].challenges.length-1?'Next mission →':'Next challenge →'; tone();
 }
 function render() {
  answered=false; $('feedback').textContent=''; $('next').hidden=true;
  const mission=MISSIONS[level], q=mission.challenges[challenge], stage=$('stage'); stage.replaceChildren();
  $('level-label').textContent=`Mission ${level+1} of ${MISSIONS.length}`;
  stage.append(element('p',`Challenge ${challenge+1} of ${mission.challenges.length}`,'eyebrow'),element('h2',`${mission.icon} ${mission.title}`));
  if(challenge===0) stage.append(element('p',mission.lesson,'lesson'));
  stage.append(element('h3',q.question));
  const choices=element('div','','choices'); stage.append(choices);
  if(q.type==='train') {
   const seen=new Set();
   q.cards.forEach(([label,detail],i)=>{
    const b=element('button',label,'choice'); b.type='button'; b.setAttribute('aria-pressed','false'); choices.append(b);
    b.onclick=()=>{ if(seen.has(i)) return; seen.add(i); b.setAttribute('aria-pressed','true'); b.classList.add('correct'); b.textContent=`${label}: ${detail}`;
     $('feedback').textContent=`${detail} ${seen.size} of ${q.cards.length} cards explored.`;
     if(seen.size===q.cards.length) complete(q.explanation);
    };
   });
  } else {
   q.choices.forEach((text,i)=>{
    const b=element('button',text,'choice'); b.type='button'; choices.append(b);
    b.onclick=()=>{ if(answered) return;
     if(i===q.answer) { b.classList.add('correct'); complete(`Shield boost! ${q.explanation}`); choices.querySelectorAll('button').forEach(btn=>btn.disabled=true); $('next').focus(); }
     else { b.classList.add('wrong'); b.setAttribute('aria-disabled','true'); b.onclick=()=>{}; $('feedback').textContent='Good effort! Think about what your defenders learned. Choose another answer. You can still earn all 10 points.'; }
    };
   });
  }
  focusHeading();
 }
 function start() { level=0;challenge=0;score=0;completed=0;$('score').textContent='0 points';$('progress').value=0;$('welcome').hidden=true;$('finish').hidden=true;$('play').hidden=false;render(); }
 function finish() {
  $('play').hidden=true; const panel=$('finish'); panel.hidden=false;panel.replaceChildren();
  panel.append(element('div','✦','badge shield-large'),element('p','MISSION COMPLETE','eyebrow'),element('h2','You are a Future Defender!'),element('p',`${score} / ${total*10} learning points`,'score-big'),element('p','You earned the HPV Shield Squad digital shield! You kept learning, practiced with your team, and explored ways to protect your future health.'),element('p','Remember: vaccines train your immune system. HPV vaccination can begin at age 9 and helps prevent several types of cancer. Ask a caregiver or healthcare professional to learn more.'),element('p','Your shield celebrates learning. It does not mean you are vaccinated or protected from illness.','hint'));
  const actions=element('div','','actions'), download=element('button','Save my shield','primary'), replay=element('button','Play again'); actions.append(download,replay);panel.append(actions);
  download.onclick=()=>{
   const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="700" height="700" viewBox="0 0 700 700"><rect width="700" height="700" rx="35" fill="#eeeafa"/><path d="M350 100 L510 160 V330 Q510 460 350 520 Q190 460 190 330 V160 Z" fill="#5430a0" stroke="#16877d" stroke-width="15"/><text x="350" y="350" fill="#ffe589" font-size="150" text-anchor="middle">★</text><g font-family="sans-serif" text-anchor="middle" fill="#33205b"><text x="350" y="60" font-size="26">Mission Well Games</text><text x="350" y="570" font-size="32">HPV Shield Squad</text><text x="350" y="615" font-size="24">Future Defender · ${score}/${total*10} learning points</text><text x="350" y="660" font-size="16">A celebration of learning—not medical protection.</text></g></svg>`;
   const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'})), link=document.createElement('a');link.href=url;link.download='HPV-Shield-Squad.svg';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  };
  replay.onclick=start;const h=panel.querySelector('h2');h.tabIndex=-1;h.focus();tone();
 }
 $('begin').onclick=start;
 $('next').onclick=()=>{ if(!answered)return; challenge++;if(challenge===MISSIONS[level].challenges.length){level++;challenge=0;}if(level===MISSIONS.length)finish();else render(); };
})();
