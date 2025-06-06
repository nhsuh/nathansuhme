'use client';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function NowPlaying() {
  const { data, isLoading } = useSWR('/api/spotify', fetcher, {
    refreshInterval: 1000, // refresh every second
    revalidateOnFocus: false,
  });
  
  if (isLoading) return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-40 h-40 bg-neutral-200 dark:bg-neutral-700 rounded-lg animate-pulse"></div>
      <p className="font-body text-sm opacity-75">Loading music...</p>
    </div>
  );
  
  if (!data || !data.isPlaying) return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-40 h-40 bg-neutral-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
        <span className="text-4xl">🎧</span>
      </div>
      <p className="font-body text-center">Nothing playing right now<br />Check out my playlists on Spotify!</p>
    </div>
  );
  
  return (
    <a href={data.songUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 hover:scale-105 transition-transform">
      <img src={data.albumImageUrl} alt={data.title} className="w-40 h-40 rounded-lg shadow-lg" />
      <div className="text-center">
        <p className="font-heading text-lg">{data.title}</p>
        <p className="font-body text-sm opacity-75">{data.artist}</p>
        <p className="font-body text-xs opacity-50 mt-1">Currently playing</p>
      </div>
    </a>
  );
} 