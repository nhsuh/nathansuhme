import { NextResponse } from 'next/server';

// This is a placeholder API route for Spotify integration
// To implement real Spotify integration, you'll need to:
// 1. Set up a Spotify app and get client credentials
// 2. Use the Spotify Web API to get currently playing track
// 3. Handle authentication and token refresh

export async function GET() {
  // Sample data - replace with actual Spotify API call
  const sampleData = {
    isPlaying: Math.random() > 0.5, // Randomly show playing or not
    title: "Giant Steps",
    artist: "John Coltrane",
    album: "Giant Steps",
    songUrl: "https://open.spotify.com/track/2JDHCmlKMqKfEGhpqCOGPd",
    albumImageUrl: "https://i.scdn.co/image/ab67616d0000b2736f70bfc7ac08c1f8e59e3a44"
  };

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));

  return NextResponse.json(sampleData);
}

// To implement real Spotify integration, use this structure:
/*
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

// Function to get access token
async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });

  return response.json();
}

// Function to get currently playing track
async function getNowPlaying() {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
}
*/ 