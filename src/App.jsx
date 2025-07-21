import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import ComingSoon from './sections/ComingSoon';
import FirstVideo from './sections/FirstVideo';
import Jason from './section/Jason';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ComingSoon />
      <FirstVideo />
      <Jason/>
    </main>
  )
}

export default App;