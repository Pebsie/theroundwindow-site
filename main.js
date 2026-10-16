// Mark the current date: hide shows that have passed so the list stays honest.
(function(){
  var now=Date.now();
  document.querySelectorAll('.shows li').forEach(function(li){
    var t=li.querySelector('time');
    if(t && new Date(t.getAttribute('datetime')).getTime()+6*3600e3<now) li.hidden=true;
  });
})();

// Footer lyric: one line from the official Bandcamp lyrics, chosen at random per load.
(function(){
  var LYRICS=[{"song": "The Silence", "release": "Fram", "lines": ["The dark clouds have parted", "The barriers are fallen"]}, {"song": "The Silence", "release": "Fram", "lines": ["We emerge as human beings", "To stand on common ground"]}, {"song": "The Silence", "release": "Fram", "lines": ["Roaring fires, golden lights", "Burning candles, crystal skies"]}, {"song": "The Silence", "release": "Fram", "lines": ["Cries of laughter, songs of joy"]}, {"song": "The Silence", "release": "Fram", "lines": ["Family gathers, vows renewed"]}, {"song": "The Silence", "release": "Fram", "lines": ["The bells to ring out on a midnight clear"]}, {"song": "Fram", "release": "Fram", "lines": ["Set out on a journey", "To the end of the world"]}, {"song": "Fram", "release": "Fram", "lines": ["Out into the blue", "Out into the new"]}, {"song": "Fram", "release": "Fram", "lines": ["For the sight and sound", "Of the unfound"]}, {"song": "Fram", "release": "Fram", "lines": ["Time and tide", "Clear blue sky"]}, {"song": "Fram", "release": "Fram", "lines": ["Where do we go now?", "We go now"]}, {"song": "Hourglass", "release": "Fram", "lines": ["With the hourglass we live and dream"]}, {"song": "Hourglass", "release": "Fram", "lines": ["Live with me now", "Join with me now"]}, {"song": "Hourglass", "release": "Fram", "lines": ["Here in the now", "Live in the now"]}, {"song": "Hourglass", "release": "Fram", "lines": ["Reach for the hourglass", "Turn it over", "Go again"]}, {"song": "Hourglass", "release": "Fram", "lines": ["Breaking the chains that tie the ship into the shore"]}, {"song": "The Crossing: Part One", "release": "The Crossing: Part One", "lines": ["Light", "Guiding the way"]}, {"song": "The Crossing: Part One", "release": "The Crossing: Part One", "lines": ["Before it fades", "I’m stretching out", "To pull the threads"]}, {"song": "The Crossing: Part One", "release": "The Crossing: Part One", "lines": ["Into this world", "From dreaming lands"]}, {"song": "The Crossing: Part One", "release": "The Crossing: Part One", "lines": ["Hear", "Spheres harmonise"]}];
  var fig=document.querySelector('.lyric'); if(!fig) return;
  var l=LYRICS[Math.floor(Math.random()*LYRICS.length)];
  var p=fig.querySelector('p'); p.textContent='';
  l.lines.forEach(function(s,i){ if(i) p.appendChild(document.createElement('br')); p.appendChild(document.createTextNode(s)); });
  var a=document.createElement('span');a.className='q';a.textContent='\u201C';p.insertBefore(a,p.firstChild);var b=document.createElement('span');b.className='q';b.textContent='\u201D';p.appendChild(b);
  fig.querySelector('cite').textContent=l.song===l.release?l.song:l.song+', '+l.release;
  fig.hidden=false;
})();

// Load sequence + scroll-in sections
(function(){
  var root=document.documentElement;
  var go=function(){ root.classList.add('loaded'); };
  if(document.fonts && document.fonts.ready){ var t=setTimeout(go,250); document.fonts.ready.then(function(){ clearTimeout(t); go(); }); } else go();
  var els=document.querySelectorAll('.live,.listen,.band,.foot');
  if(!('IntersectionObserver' in window)){ els.forEach(function(e){e.classList.add('in')}); return; }
  var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); },{threshold:.12});
  els.forEach(function(e){ io.observe(e); });
})();
