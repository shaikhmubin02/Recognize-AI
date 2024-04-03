# Recognize-AI 

This project is an experimental exploration of real-time AI interactions, inspired by the "Gemini" video showcased by Google. The aim is to create a system where users can interact with an AI assistant in real-time, similar to the interactions portrayed in the "Gemini" video.

<a href="https://recognize-ai.vercel.app/">Demo</a>

![recognize-demo](https://github.com/shaikhmubin02/Recognize-AI/assets/92599537/6b71b409-b3ed-48df-a406-ddaac49e87df)

## Overview
The project leverages the GPT-4 Vision API to achieve real-time AI interactions. The primary goal is to enable users to stream video input to the assistant, allowing them to ask questions and receive responses without directly interacting with the UI.

## Technical Constraints
- Real-Time Interaction: The system must support real-time interactions between the user and the AI assistant.
- Video Streaming: Users should be able to stream a video as input to the assistant.
- Voice Interaction: Users must be able to communicate with the assistant verbally without interacting with the UI.
- Video Analysis: The assistant should analyze the video input to understand the user's questions.
- Speech Response: The assistant must respond verbally to the user's queries.

## Implementation
### Video Streaming
- To address the challenge of streaming video input, a grid of screenshots is created from the video at regular intervals. This grid is then treated as a single image representing the video stream, allowing for easier processing.

### AI Integration
- The GPT-4 Vision API is utilized for reasoning about user queries based on the video input. The system prompt is fine-tuned to emphasize the temporal nature of the images, enabling the assistant to reason using the sequence of images.

### Voice Interaction
- User speech is detected, transcribed using Whisper, and sent to the Whisper API for processing. The result is then passed through a text-to-speech API to generate verbal responses from the assistant. 

## Stack
- Next.js with App Router.
- Vercel AI npm module.
- OpenAI's Whisper and GPT APIs.

## Limitations
- Speed: The system is slower compared to the Gemini demo, as it requires waiting for audio transcription and processing.
- Accuracy: The assistant may struggle with complex questions and occasionally provide incorrect answers.
- Turn-Based Interaction: Unlike the Gemini demo, interactions are turn-based, with the user speaking followed by the assistant's response.
- Image Quality: Low-quality images may result in hallucinations or difficulty for the assistant to provide accurate responses.

## Conclusion
While the experiment may not fully replicate the experience showcased in the Gemini video, it serves as a fun exploration of real-time AI interactions. There is room for improvement in terms of speed, accuracy, and naturalness of interactions.

