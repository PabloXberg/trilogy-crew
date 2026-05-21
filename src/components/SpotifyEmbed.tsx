interface Props {
  artistId: string;
}

export default function SpotifyEmbed({ artistId }: Props) {
  return (
    <div className="spotify-embed">
      <iframe
        title="Spotify"
        src={`https://open.spotify.com/embed/artist/${artistId}?theme=0`}
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}
