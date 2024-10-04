import flanger_graph from "../images/flanger_graph.png";
import flanger_vst from "../images/flanger_vst.png";
import { Row } from "react-bootstrap";

const SimpleFlanger = () => {
    return(
        <Row className="justify-content-center">
            <div className="d-flex flex-column col-lg-9">
                <div>
                    <h1>Simple Flanger</h1>
                    <p className="project-link">
                        <a href="https://www.lim.di.unimi.it/download/vst/simpleflanger/SimpleFlanger.zip"><i class="fa-solid fa-download"></i> Download the plugin</a>
                    </p>
                </div>
                <div className="d-flex justify-content-between flex-row flex-wrap">
                    <div className="col-12 col-lg-5">
                        <p>
                            During my university studies in "Musical Information Science", I had the opportunity to work on
                            an project focussed on audio processing and modification. The aim of the project was to create a plugin
                            for the Flanger effect, which is widely used in music production, especially for guitar tracks.
                        </p>
                        <p>
                            The tool of choice for this project was JUCE, a comprehensive C++ framework for creating high-performance audio
                            applications and plugins. JUCE provides a broad set of features that make it a powerful tool for audio
                            development, such as support for various audio formats, MIDI support, and a host of user interface components.
                        </p>
                        <p>
                            I started by understanding the principles behind the Flanger effect, which is a type of phase-shifting effect
                            that creates a unique 'swooshing' sound. It does this by mixing two identical signals together, with one signal
                            delayed by a small and gradually changing period.
                        </p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img src={flanger_vst} className="w-100" alt="Flanger VST"/>
                    </div>
                    <div>
                        <p>
                            Once I had a good understanding of the Flanger effect, I set about implementing it using the JUCE framework.
                            This involved writing code to handle the audio processing and create the user interface for the plugin.
                        </p>
                        <p>
                            After the plugin was built, it was time to test its performance. For this, I turned to Cubase, a leading
                            digital audio workstation that I had also been studying during my course and in my free time.
                            After installing the plugin in Cubase, I was able to apply the Flanger effect to various guitar tracks and
                            listen to the results.
                        </p>
                        <div className="project-image">
                            <img src={flanger_graph} className="w-100" alt="Flanger graph"/>
                        </div>
                        <p>
                            Overall, the project was a great learning experience. It allowed me to apply the theoretical knowledge I had
                            gained from my course in a practical setting, and gave me firsthand experience of developing audio plugins
                            using a professional-grade framework like JUCE. It also reinforced my understanding of audio production
                            techniques and tools like Cubase.
                        </p>
                    </div>
                </div>
            </div>
        </Row>
    )
}

export default SimpleFlanger;