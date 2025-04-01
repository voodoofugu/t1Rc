export default function VideoTag({
  source = [],
  poster,
  autoPlay = false,
  controls = false,
  loop = false,
  muted = false,
  className = "",
}) {
  // получаем расширение видео из URL
  const getMimeType = (url) => {
    const extension = url.split(".").pop()?.toLowerCase();
    switch (extension) {
      case "mp4":
        return "video/mp4";
      case "webm":
        return "video/webm";
      case "ogg":
        return "video/ogg";
      default:
        return "";
    }
  };

  return (
    <div className={`videoTag-wrapper ${className}`}>
      <video
        className="videoTag"
        poster={poster}
        autoPlay={autoPlay}
        controls={controls}
        loop={loop}
        muted={muted}
      >
        {source.length > 0
          ? source.map((src, index) => (
              <source key={index} src={src} type={getMimeType(src)} />
            ))
          : null}
      </video>
    </div>
  );
}
