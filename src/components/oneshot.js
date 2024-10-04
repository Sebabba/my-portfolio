import oneshot_network from "../images/oneshot_network.png";
import oneshot_results from "../images/oneshot_results.png";
import oneshot_saliency from "../images/oneshot_saliency.png";
import { Row } from "react-bootstrap";

const Oneshot = () => {
    return(
        <Row className="justify-content-center">
            <div className="d-flex flex-column col-lg-8">
                <div>
                    <h1>One-shot Music Genre Classification</h1>
                    <p className="project-link">
                        <a href="https://github.com/Sebabba/oneshot-music-genre-learning-thesis"><i className="fa-brands fa-github"></i> Go to GitHub</a>
                    </p>
                </div>
                <div className="project-image">
                    <img src={oneshot_network} className="w-100" alt="Oneshot network"/>
                </div>
                <div>
                    <p>
                        The primary focus of this comprehensive thesis work is the application of the one-shot learning approach within
                        the specific context of music, with a particular emphasis on the task of classifying musical genres. The central
                        aim is to critically evaluate the effectiveness and efficiency of this unique approach when it comes to audio
                        classification tasks that are limited by a scarcity of information, and to observe and analyze how the results
                        obtained can fluctuate and vary in response to changes in the quantity of available data.
                    </p>
                    <p>
                        The implementation of the model leveraged the capabilities of the Keras machine-learning library, a Python
                        module frequently used as an interface for a variety of machine learning tasks, which has the added benefit of
                        supporting TensorFlow as a backend. TensorFlow, an open-source platform, is renowned for its capacity to
                        facilitate the implementation of a wide array of machine learning algorithms, making it a vital tool in the
                        model's development.
                    </p>
                    <div className="project-image">
                        <img src={oneshot_saliency} className="w-100" alt="Oneshot saliency map"/>
                    </div>
                    <p>
                        To extract the mel spectrograms required for the operation of the model, the Librosa Python package was
                        employed. This Python package is specifically tailored for the analysis of audio and music, making it the ideal
                        tool for this particular task.
                    </p>
                    <p>
                        The neural network architecture that was chosen for this project was a convolutional siamese neural network, a
                        robust and versatile architecture known for its performance in various tasks.
                    </p>
                    <p>
                        The development process was initiated with a pre-existing neural network, a network that was originally designed
                        and fine-tuned for the purpose of image classification. However, the main objective was to adapt this existing
                        network to cater to audio data classification tasks. This adaptation involved the use of spectrograms, which are
                        incredibly useful for analyzing the spectral characteristics inherent in audio data. The ultimate goal of this
                        adaptation was to create a model capable of identifying and capturing the subtle similarities between audio
                        tracks that belong to the same musical genre.
                    </p>
                    <div className="project-image">
                        <img src={oneshot_results} className="w-100" alt="Oneshot results"/>
                    </div>
                    <p>
                        These are the results of the practical tests. It is possible to see that, even with very little of trainig data,
                        there are music genres that are very easly recognizable.
                    </p>
                </div>
            </div>
        </Row>
    )
}

export default Oneshot;