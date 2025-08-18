import React, { useState, useRef, useEffect } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import '../styles/AudioPlayer.css';

const AudioPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Hàm để bật/tắt nhạc
  const togglePlayPause = () => {
    const audioEl = audioRef.current;
    if (isPlaying) {
      audioEl.pause();
    } else {
      audioEl.play().catch(error => console.log("Error attempting to play audio:", error));
    }
    // Trạng thái sẽ được cập nhật bởi event listener 'play' và 'pause'
    // nên không cần gọi setIsPlaying ở đây nữa để tránh xung đột.
  };

  useEffect(() => {
    const audioEl = audioRef.current;

    // Đồng bộ trạng thái isPlaying với trình phát audio
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audioEl.addEventListener('play', handlePlay);
    audioEl.addEventListener('pause', handlePause);

    // Logic tự động phát khi người dùng tương tác lần đầu
    const handleFirstInteraction = () => {
      if (audioEl.paused) {
        audioEl.play().catch(error => {
          console.log("Autoplay was prevented. User needs to click the button.", error);
        });
      }
      window.removeEventListener('click', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);

    // Dọn dẹp khi component unmount
    return () => {
      audioEl.removeEventListener('play', handlePlay);
      audioEl.removeEventListener('pause', handlePause);
      window.removeEventListener('click', handleFirstInteraction);
    };
  }, []); // <-- Thay đổi ở đây: mảng rỗng để effect chỉ chạy một lần

  return (
    <div>
      <audio ref={audioRef} src={src} loop style={{ display: 'none' }} />
      <a onClick={togglePlayPause} className="audio-toggle-button" aria-label="Toggle Music">
        {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </a>
    </div>
  );
};

export default AudioPlayer;