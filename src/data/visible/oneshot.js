import oneshot_network from '../../images/oneshot_network.png';
import oneshot_results from '../../images/oneshot_results.png';
import oneshot_saliency from '../../images/oneshot_saliency.png';

const oneshot = {
  id: 4,
  slug: 'oneshot',
  title: 'One-shot Music Genre Classification',
  shortDescription:
    'University thesis project. Modification of a Convolutional Siamese Neural Network for music genres classification using the One-Shot approach.',
  heroImage: oneshot_network,
  gallery: null,
  tech: ['Python', 'Keras', 'TensorFlow', 'Neural Networks'],
  content: [
    {
      type: 'text',
      value:
        'The primary focus of this comprehensive thesis work is the application of the one-shot learning approach within the specific context of music, with a particular emphasis on the task of classifying musical genres. The central aim is to critically evaluate the effectiveness and efficiency of this unique approach when it comes to audio classification tasks that are limited by a scarcity of information, and to observe and analyze how the results obtained can fluctuate and vary in response to changes in the quantity of available data.',
    },
    {
      type: 'text',
      value:
        "The implementation of the model leveraged the capabilities of the Keras machine-learning library, a Python module frequently used as an interface for a variety of machine learning tasks, which has the added benefit of supporting TensorFlow as a backend. TensorFlow, an open-source platform, is renowned for its capacity to facilitate the implementation of a wide array of machine learning algorithms, making it a vital tool in the model's development.",
    },
    {
      type: 'image',
      value: oneshot_saliency,
    },
    {
      type: 'text',
      value:
        'To extract the mel spectrograms required for the operation of the model, the Librosa Python package was employed. This Python package is specifically tailored for the analysis of audio and music, making it the ideal tool for this particular task.',
    },
    {
      type: 'text',
      value:
        'The neural network architecture that was chosen for this project was a convolutional siamese neural network, a robust and versatile architecture known for its performance in various tasks.',
    },
    {
      type: 'text',
      value:
        'The development process was initiated with a pre-existing neural network, a network that was originally designed and fine-tuned for the purpose of image classification. However, the main objective was to adapt this existing network to cater to audio data classification tasks. This adaptation involved the use of spectrograms, which are incredibly useful for analyzing the spectral characteristics inherent in audio data. The ultimate goal of this adaptation was to create a model capable of identifying and capturing the subtle similarities between audio tracks that belong to the same musical genre.',
    },
    {
      type: 'image',
      value: oneshot_results,
    },
    {
      type: 'text',
      value:
        'These are the results of the practical tests. It is possible to see that, even with very little of trainig data, there are music genres that are very easly recognizable.',
    },
  ],
  github: null,
  demo: null,
  website: null,
};

export default oneshot;
