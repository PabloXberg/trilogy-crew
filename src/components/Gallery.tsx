interface Props {
  /** number of placeholder slots */
  slots?: number;
}

export default function Gallery({ slots = 8 }: Props) {
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
