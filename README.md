# AI-Based Visual Aid App
   Development of AI-Based Visual Aid with Integrated Reading Assistant for the Completely Blind

   Project Report PDF is also available.

# Overview
   AI-Based Visual Aid App is an intelligent mobile application built using React Native, Expo, and OpenAI's APIs.
   It is designed to offer an accessible voice-based and image-based interaction interface powered by artificial intelligence.

# Features
1. Interactive AI Chat
   - Users can record voice queries.
   - Audio input is processed and transcribed using OpenAI's Whisper API.
   - Transcribed text is sent to OpenAI's GPT-4 model for intelligent response generation.
   - AI-generated responses are delivered through voice playback using Expo's Speech module.

2. Image Analysis with AI
   - Users can capture images directly from the app using their device camera.
   - Images are uploaded securely to Imgur for hosting.
   - Uploaded images are analyzed by GPT-4, providing descriptive and helpful responses.

3. Intuitive UI
   - Visually appealing and easy-to-navigate UI built with Expo LinearGradient and Lottie animations.
   - Animated feedback is provided during recording, processing, and AI speech responses.

4. Seamless Onboarding
   - Beautifully designed onboarding screen to introduce users to app functionality (optional, modular component).

# Technologies Used
1. Frontend Development:
   - React Native
   - Expo
   - Expo Router
   - react-native-size-matters (responsive design)

2. Backend Integration & AI:
   - OpenAI Whisper (Speech-to-Text)
   - OpenAI GPT-4 (AI Response Generation)
   - Expo Speech API (Text-to-Speech)

3. Image Handling:
   - Expo Image Picker
   - Imgur API for image uploading and hosting

4. Animation & UI:
   - Lottie Animations
   - Expo LinearGradient

# Project Structure
AI-Based-Visual-Aid-App/
    ├── app/
    │    ├── (routes)/
    │    │     ├── home.tsx
    │    │     └── onboarding.tsx (optional)
    │    └── assets/
    │          ├── animations/
    │          ├── fonts/
    │          ├── images/
    │          └── svgs/
    ├── configs/
    │    └── constants.ts
    ├── package.json
    ├── app.json
    └── .gitignore

# Quick Start (Local Setup)
1. Clone the Repository:
      git clone https://github.com/soumadipmajumder1509/AI-Based-Visual-Aid-App.git
      cd AI-Based-Visual-Aid-App

2. Install Dependencies:
      npm install
          or
      yarn install

3. Setup Environment Variables:
      - Create a .env file in your root directory.
      - Add your OpenAI API Key:
            EXPO_PUBLIC_OPENAI_API_KEY=your_openai_key_here

      - Add Imgur Client ID for image uploading:
            IMGUR_CLIENT_ID=your_imgur_client_id_here

4. Start the Expo Development Server:
      npx expo start
           or
      yarn start

# License
   Distributed under the MIT License. See LICENSE for more information.

# Credits & Contributors
   - Concept & Development: Soumadip Majumder (IIT-BHU)
   - Libraries and APIs: Expo, OpenAI, Imgur
   - Feel free to fork the repository, submit issues, and contribute via pull requests!

# Enjoy exploring the AI-Based Visual Aid App! 🌟
