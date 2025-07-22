import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';

function Index() {
    return (
        <main>
            <HeroSection />
            <About />
            <Education />
            <Experience />
            <Skills />
        </main>
    );
}

export default Index;