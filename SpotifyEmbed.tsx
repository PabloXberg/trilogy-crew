interface Props {
  urls: [string, string];
  /** Hex without "#", default is the terracota accent. */
  color?: string;
}

function buildEmbed(url: string, color: string) {
  const params = new URLSearchParams({
    url,
    color: `#${color}`,
    inverse: 'true',
    auto_play: 'false',
    show_user: 'true',
  });
  return `https://w.soundcloud.com/player/?${params.toString()}`;
}

export default function Tracks({ urls, color = 'c25c3a' }: Props) {
  return (
    <div className="tracks-grid">
      {urls.map((u, i) => (
        <iframe
          key={i}
          title={`SoundCloud embed ${i + 1}`}
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={buildEmbed(u, color)}
        />
      ))}
    </div>
  );
}
