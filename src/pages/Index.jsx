import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';

function Index() {
    return (
        <div>
            <Header />
            <HeroSection />
            <About />
            <Education />
            <Experience />
            <Skills />
        </div>
    );
}

export default Index;