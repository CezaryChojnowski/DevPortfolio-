import React, { useRef, useEffect } from 'react'
import './App.css';
import { ReactComponent as Scene } from './frame.svg';
import gsap from 'gsap';

function App() {
  const wrapper = useRef(null)


  useEffect(() => {
    const [elements] = wrapper.current.children;

    const desk = elements.getElementById('Desk')
    const monitors = elements.getElementById('Monitors')
    const code = elements.getElementById('Code')
    const man = elements.getElementById('Man')
    const chair = elements.getElementById('Chair')

    gsap.set([monitors, ...code.children, man, chair, desk], { autoAlpha: 0 });
    gsap.set(monitors, { transformOrigin: '50% 100%' });

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });


    tl.fromTo(desk, { x: '-=300' }, { duration: 1.5, x: '+=300', autoAlpha: 1 })
      .fromTo(monitors, { scaleY: 0 }, { duration: 0.7, autoAlpha: 1, scaleY: 1 })
      .fromTo(chair, { scaleY: 0 }, { duration: 0.3, autoAlpha: 1, scaleY: 1 })
      .fromTo(man, { x: '-=300' }, { duration: 1.5, x: '+=300', autoAlpha: 1 })
      .to(code.children, { duration: 1, autoAlpha: 1, stagger: 0.1 })
  })



  return (
    <div>
      <div className="row">
        <div className="column">Coming soon</div>
      </div>
      <div ref={wrapper} className="App">
        <Scene />
      </div>

    </div>
  );
}

export default App;
