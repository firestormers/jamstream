import React, { useRef, useEffect } from "react";
import "../style/Library.css";

const AudioBar = ({ song, onClose }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load()
      audioRef.current.addEventListener("canplay", () => {
        audioRef.current.play()
      });
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("canplay", () => {
          audioRef.current.play()
        });
      }
    };
  }, []);

  return (
    <div className="audio-bar">
      <audio ref={audioRef} src={song.audio} controls />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default AudioBar;
