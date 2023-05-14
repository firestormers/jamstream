import { useEffect, useRef } from "react";

const AudioBar = ({ song, onClose }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current
    audio.load()
    audio.play()
      .catch((err) => {
        console.log(err)
      });

    return () => {
      audio.pause()
    }
  }, [])

  return (
    <div>
      <audio ref={audioRef} src={song.audio} controls />
      <button onClick={onClose} className="close" >Close</button>
    </div>
  );
};

export default AudioBar;

