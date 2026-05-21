import { useState } from 'react';

interface Props {
  /** Real photo paths. If provided, renders these instead of placeholders. */
  photos?: string[];
  /** Number of placeholder slots when no photos given. */
  slots?: number;
}

export default function Gallery({ photos, slots = 8 }: Props) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  if (photos && photos.length > 0) {
    return (
      <>
        <div className="gallery-grid">
          {photos.map((src, i) => (
            <div
              key={i}
              className="gallery-item has-photo"
              role="button"
              tabIndex={0}
              onClick={() => setLightbox(src)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setLightbox(src);
              }}
            >
              <img src={src} alt={`Live ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
        {lightbox && (
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            onClick={() => setLightbox(null)}
          >
            <img src={lightbox} alt="" />
            <button className="lightbox-close" aria-label="Close">
              ×
            </button>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="gallery-grid">
      {Array.from({ length: slots }).map((_, i) => {
        const n = String(i + 1).padStart(2, '0');
        return (
          <div key={i} className="gallery-item">
            <div className="gnum">{n}</div>
            IMG_0{n}
          </div>
        );
      })}
    </div>
  );
}
