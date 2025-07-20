import React from "react";
import SectionHeader from "./SectionHeader";
import profilePicture from "/src/assets/Profile_picture.png";

function About() {
    return (
        <section
            id="About"
            className="flex flex-col items-center justify-around w-full h-full py-20"
        >
            <SectionHeader title="About Me" />
            <div className="flex flex-col md:flex-row md:space-x-6 items-center justify-evenly px-4">
                <article className="flex justify-center items-center">
                    <img
                        src={profilePicture}
                        alt=""
                        className="w-[22.5em] rounded-xl"
                    />
                </article>

                <article className="flex-col items-center justify-center space-y-6 md:w-1/2">
                    <p className="font-mont text-gray-300 leading-relaxed">
                        I'm a 22 year old aspiring software engineer, seeking
                        opportunities to develop innovative solutions that make
                        a real impact. My journey began with a curiosity about
                        how technology can solve complex problems and has
                        evolved into a career dedicated to creating cutting-edge
                        applications.
                    </p>

                    <p className="font-mont text-gray-300 leading-relaxed">
                        Specializing in backend development, automation, and
                        devops, I thrive on challenges that push the boundaries
                        of what's possible. I believe in writing clean,
                        efficient code and building systems that scale.
                    </p>

                    <p className="font-mont text-gray-300 leading-relaxed">
                        When I'm not coding, you can find me travelling the
                        world, hitting the gym or immersing myself in
                        story-driven games. I'm always excited to collaborate on
                        projects that can make a difference.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default About;
