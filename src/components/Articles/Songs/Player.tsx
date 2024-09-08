import { useRef, useState } from "react";
import {
  CgPlayPauseO,
  CgPlayButtonO,
  CgPlayTrackNextO,
  CgPlayTrackPrevO
} from "react-icons/cg";

type PlayerProps = {
  trackOptions: {
    path: string;
    name: string;
  };
};

export const Player = ({
  trackOptions: { name = "Enchanted", path }
}: PlayerProps) => {
  const audioElement = useRef<HTMLAudioElement>(null);

  const [isPlay, setIsPlay] = useState<boolean | undefined>(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePause = () => {
    audioElement.current?.pause();
    setIsPlay(!audioElement.current?.paused);
  };

  const handlePlay = () => {
    audioElement.current?.play();
    setIsPlay(!audioElement.current?.paused);
  };

  const handleTimeUpdate = () => {
    if (audioElement.current) {
      const audio = audioElement.current;
      setCurrentTime((audio.currentTime / audio.duration) * 100);
    }
  };
  const handleStart = () => {
    if (audioElement.current) {
      const audio = audioElement.current;
      audio.currentTime = 0;
      setCurrentTime(0);
      handlePlay();
    }
  };
  const handleEnd = () => {
    if (audioElement.current) {
      const audio = audioElement.current;
      audio.currentTime = audio.duration;
      setCurrentTime(audio.duration);
    }
  };

  return (
    <div className="mx-auto mb-16 flex w-fit flex-col items-center justify-center gap-2">
      <audio
        ref={audioElement}
        src={path}
        autoPlay={isPlay}
        onTimeUpdate={handleTimeUpdate}
      ></audio>
      <h3 className="text-2xl uppercase leading-none -tracking-6 text-pink-600">
        {name}
      </h3>
      <span className="relative flex h-1 w-60 items-center bg-pink-400">
        <span
          className="absolute inset-0 h-full w-0 bg-pink-600"
          style={{ width: `${currentTime}%` }}
        ></span>
        <div
          id="timelineBall"
          style={{ left: `${currentTime}%` }}
          className="relative size-4 -translate-x-1/2 rounded-full border-2 border-pink-600 bg-yellow-50 shadow-2xl"
        ></div>
      </span>
      <div className="flex cursor-pointer gap-2 text-3xl text-pink-600">
        <CgPlayTrackPrevO onClick={handleStart} />
        {isPlay ? (
          <CgPlayPauseO onClick={handlePause} />
        ) : (
          <CgPlayButtonO onClick={handlePlay} />
        )}
        <CgPlayTrackNextO onClick={handleEnd} />
      </div>
    </div>
  );
};
