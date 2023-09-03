const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const AppleMusicAPI = require('apple-music');
const app = express();

// Initialize Spotify and Apple Music APIs credentials
const spotifyApi = new SpotifyWebApi({
	clientId: 'SPOTIFY_CLIENT_ID',
	clientSecret: 'SPOTIFY_CLIENT_SECRET',
});

// Set the access token (replace 'your_access_token' with your actual access token)
// const accessToken = 'ACCESS_TOKEN';
// spotifyApi.setAccessToken(accessToken);
// const appleMusic = new AppleMusicAPI({
// 	// Apple Music credentials
// });

// Authenticate Spotify and Apple Music

app.get('/transfer', async (req, res) => {
	try {
		// Get Spotify playlist tracks
		const spotifyPlaylistId = 'SPOTIFY_PLAYLIST_ID';
		const spotifyPlaylist = await spotifyApi.getPlaylistTracks(
			spotifyPlaylistId
		);

		// Iterate through Spotify tracks and add them to Apple Music playlist
		for (const track of spotifyPlaylist.body.items) {
			const spotifyTrackName = track.track.name;
			const spotifyArtist = track.track.artists[0].name;

			// Find equivalent track on Apple Music based on track name and artist
			const appleMusicTrack = await appleMusic.searchSong(
				spotifyTrackName,
				spotifyArtist
			);

			if (appleMusicTrack.length > 0) {
				// Add the found track to your Apple Music playlist
				const appleMusicTrackId = appleMusicTrack[0].id;
				await appleMusic.addTrackToPlaylist(
					'APPLE_MUSIC_PLAYLIST_ID',
					appleMusicTrackId
				);
			}
		}

		res.status(200).send('Playlist transfer complete');
	} catch (error) {
		console.error(error);
		res.status(500).send('Error transferring playlist');
	}
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
