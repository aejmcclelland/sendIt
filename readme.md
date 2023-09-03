# SendIt Node.js Express App

## Overview

SendIt is a Node.js Express application that allows you to transfer playlists from Spotify to Apple Music. This app interacts with the Spotify and Apple Music APIs to extract songs from a Spotify playlist and add them to an Apple Music playlist.

## Installation

To run the SendIt app locally, follow these steps:

1. Clone this Git repository to your local machine:

   ```bash
   git clone https://github.com/aejmcclelland/sendIt.git

2. Navigate to the project directory:

    ```bash
    cd sendIt

3. Install the required dependancies:

```bash
npm install
```
4. Configure your environment variables:
Create a .env file in the project root directory.
Add the following variables to the .env file:

```bash

SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_PLAYLIST_ID=your_spotify_playlist_id
APPLE_MUSIC_API_KEY=your_apple_music_api_key
```

Replace your_spotify_client_id, your_spotify_client_secret, your_spotify_playlist_id, and your_apple_music_api_key with your actual credentials and playlist ID.

5. Start the Node.js app:

```bash
npm start
```
## Usage

1. Open a web browser and navigate to http://localhost:3000.
2. Follow the on-screen instructions to initiate the playlist transfer from Spotify to Apple Music.

 - Please note that this app requires valid Spotify and Apple Music credentials and API keys. It is recommended to sign up for developer accounts with both Spotify and Apple Music to obtain the necessary credentials.

## Credits

 - This app was developed by Andrew McClelland.