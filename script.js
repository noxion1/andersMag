const ding1 = new TimelineMax({});
const ding2 = new TimelineMax({});

const vierkant = document.querySelector('#_vierkant_');

const hart = document.querySelector('.cls-6');

const a = document.querySelector('#_aAnders_');
const n = document.querySelector('#n');
const d = document.querySelector('#d');
const e = document.querySelector('#e');
const r = document.querySelector('#r');
const s = document.querySelector('#s');

TweenMax.to(hart, 0.7, {scaleX: 1.5, transformOrigin: "center"})
TweenMax.to(hart, 0.7, {scaleY: 1.5})
TweenMax.to(hart, 0.7, {rotate: 360, transformOrigin: "center"})
TweenMax.to(hart, 0.7, {scaleY: -1.5})
TweenMax.to(hart, 0.7, {scaleY: -1.5})
TweenMax.to(hart, 0.7, {scaleY: 1.5})
TweenMax.to(hart, 0.7, {scaleY: -1.5})
TweenMax.to(hart, 0.7, {scaleY: 1.5});

ding2
      .to(vierkant, 3, {y: 0})
      .to(vierkant, 3, {y: 200})
      .to(vierkant, .5, {y: -225})
      .to(vierkant, .5, {y: 10})
      .to(vierkant, .2, {y: 0});

ding1
      .to(a, 0.25, {y: -90})
      .to(a, 0.25, {y: -19})
      .to(n, 0.25, {x: 50})
      .to(n, 0.25, {x: -30})
      .to(d, 0.25, {y: 50})
      .to(d, 0.25, {y: -19})
      .to(e, 0.25, {x: -80})
      .to(e, 0.25, {x: -34})
      .to(r, 0.25, {y: -50})
      .to(r, 0.25, {y: -19})
      .to(s, 0.25, {x: 50})
      .to(s, 0.25, {x: -19});
