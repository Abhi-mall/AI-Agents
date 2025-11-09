"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Download, Volume2 } from "lucide-react";
import { FaWaveSquare } from "react-icons/fa";
import { div } from "framer-motion/client";

type DemoTrack = {
  id: string;
  title: string;
  src: string; // URL or local path to the audio file
  duration?: number; // optional known duration (seconds)
  transcript?: string; // optional transcript / description
};

export default function VoiceDemo({
  tracks = [
    {
      id: "voice-demo-1",
      title: "Affix AI — Voice Agent Demo",
      // Replace with your actual demo file path or external URL:
      src: "/audio1.mp3",
    },
  ],
}: {
  tracks?: DemoTrack[];
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // seconds
  const [duration, setDuration] = useState<number | undefined>(undefined);
  const [volume, setVolume] = useState(0.9);
  const [isMuted, setIsMuted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  const current = tracks[currentIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // set initial volume
    audio.volume = volume;

    const onLoadedMetadata = () => {
      setDuration(audio.duration || current.duration);
    };
    const onTimeUpdate = () => setProgress(audio.currentTime);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, [currentIndex, current.duration]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play().catch(() => {
        // autoplay may fail on some browsers — gracefully handle
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, currentIndex]);

  // formatting helpers
  const fmt = (s?: number) => {
    if (!s || !Number.isFinite(s)) return "0:00";
    const sec = Math.floor(s);
    const m = Math.floor(sec / 60);
    const r = sec % 60;
    return `${m}:${r.toString().padStart(2, "0")}`;
  };

  // user interaction handlers
  const togglePlay = () => setIsPlaying((p) => !p);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const t = Number(e.target.value);
    audio.currentTime = t;
    setProgress(t);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setVolume(v);
    if (v === 0) setIsMuted(true);
    else setIsMuted(false);
  };

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = current.src;
    a.download = `${current.title}.mp3`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const prevTrack = () => {
    setCurrentIndex((i) => (i - 1 + tracks.length) % tracks.length);
    setIsPlaying(false);
    setProgress(0);
  };

  const nextTrack = () => {
    setCurrentIndex((i) => (i + 1) % tracks.length);
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className="w-full bg-[#212121] py-8 flex flex-col items-center px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Voice Demo</h2>
                  <p className="text-sm text-gray-300 mb-2">
            Hear a short demo of our natural-sounding voice agent in action.
          </p>
    <section className="w-full max-w-2xl mx-auto px-6 py-10 bg-[#262626] rounded-2xl border border-gray-700 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex-1 text-left">

          <div className="mt-4 hidden md:flex items-center gap-3">
            <button
              aria-label={isPlaying ? "Pause demo" : "Play demo"}
              onClick={togglePlay}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-medium shadow-sm hover:bg-gray-100 transition"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? "Pause" : "Play"}
            </button>

            <div className="inline-flex items-center gap-2 text-sm text-gray-300 bg-[#1f1f1f] px-3 py-2 rounded-lg">
              <Volume2 className="w-4 h-4" />
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={isMuted ? 0 : volume}
                onChange={handleVolume}
                aria-label="Volume"
                className="w-32 accent-gray-400"
              />
            </div>

            {/* <button
              onClick={() => setShowTranscript((s) => !s)}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-600 text-gray-200 hover:bg-[#2a2a2a] transition text-sm"
            >
              <FaWaveSquare className="w-4 h-4" />
              {showTranscript ? "Hide Transcript" : "Show Transcript"}
            </button> */}

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-600 text-gray-200 hover:bg-[#2a2a2a] transition text-sm"
              aria-label="Download demo audio"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>

        {/* Track selector (if multiple) */}
        {tracks.length > 1 && (
          <div className="flex items-center gap-3">
            <button
              onClick={prevTrack}
              className="p-2 rounded-md bg-[#1f1f1f] hover:bg-[#2a2a2a] text-gray-200"
              aria-label="Previous demo"
            >
              ◀
            </button>
            <div className="text-sm text-gray-300">
              <div className="font-medium">{current.title}</div>
              <div className="text-xs text-gray-400">{currentIndex + 1} of {tracks.length}</div>
            </div>
            <button
              onClick={nextTrack}
              className="p-2 rounded-md bg-[#1f1f1f] hover:bg-[#2a2a2a] text-gray-200"
              aria-label="Next demo"
            >
              ▶
            </button>
          </div>
        )}
      </div>

      {/* Mobile controls (visible on small screens) */}
      <div className="mt-6 md:hidden flex items-center gap-3">
        <button
          aria-label={isPlaying ? "Pause demo" : "Play demo"}
          onClick={togglePlay}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-medium shadow-sm hover:bg-gray-100 transition"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {isPlaying ? "Pause" : "Play"}
        </button>

        <div className="flex-1">
          <div className="text-xs text-gray-400">
            {fmt(progress)} / {fmt(duration)}
          </div>
        </div>

        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-600 text-gray-200 hover:bg-[#2a2a2a] transition text-sm"
        >
          <Download className="w-4 h-4" />
        </button>
      </div>

      {/* Seek bar */}
      <div className="mt-6">
        <input
          type="range"
          min={0}
          max={duration || 100}
          step={0.01}
          value={progress}
          onChange={handleSeek}
          aria-label="Seek"
          className="w-full accent-gray-400"
        />
        <div className="flex justify-between mt-1 text-xs text-gray-400">
          <span>{fmt(progress)}</span>
          <span>{fmt(duration)}</span>
        </div>
      </div>

      {/* Transcript / notes
      {showTranscript && current.transcript && (
        <div className="mt-6 p-4 bg-[#1c1c1c] border border-gray-700 rounded-lg text-sm text-gray-300">
          <strong className="text-white">Transcript</strong>
          <p className="mt-2 whitespace-pre-wrap">{current.transcript}</p>
        </div>
      )} */}

      {/* Hidden native audio element */}
      <audio ref={audioRef} src={current.src} preload="metadata" />
    </section>
    </div>
  );
}

/* USAGE:
   import VoiceDemo from "@/app/components/VoiceDemo";
   <VoiceDemo
     tracks={[
       { id: "demo1", title: "Voice Agent — Demo", src: "/audio/voice-demo-1.mp3", transcript: "..." },
       { id: "demo2", title: "Short sample", src: "/audio/voice-demo-2.mp3" }
     ]}
   />
*/