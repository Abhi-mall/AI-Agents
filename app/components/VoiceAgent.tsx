"use client";

import { useState, useRef } from "react";
import { Mic, X } from "lucide-react";

export default function VoiceAgent() {
  const [recording, setRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [open, setOpen] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event: BlobEvent) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const audioUrl = URL.createObjectURL(audioBlob);
        setRecordedAudio(audioUrl);
      };

      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
      setRecording(true);
    } catch (error) {
      alert("🎙️ Mic access denied or unavailable.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

const sendToAI = async () => {
  if (!audioChunksRef.current.length) return;

  const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
  const formData = new FormData();
  formData.append("file", audioBlob, "recording.webm");

  const webhookUrl = "https://endolithic-kati-scrubbily.ngrok-free.dev/webhook-test/get-ans";

  setProcessing(true);
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      body: formData,
    });

    // ✅ Always parse JSON, because your backend returns Buffer data
    const json = await response.json();

    if (json && json.data) {
      // Convert the numeric array into a Uint8Array
      const byteArray = new Uint8Array(json.data);

      // Create a valid Blob with audio/mpeg type
      const fixedAudioBlob = new Blob([byteArray], { type: "audio/mpeg" });

      // Create a playable URL
      const audioUrl = URL.createObjectURL(fixedAudioBlob);

      // Play the audio automatically
      const audioPlayer = new Audio(audioUrl);
      await audioPlayer.play();
    } else {
      throw new Error("Invalid backend response (no audio data found)");
    }
  } catch (err: any) {
    console.error(err);
    alert("⚠️ Error: " + (err.message || err));
  } finally {
    setProcessing(false);
  }
};


  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
      >
        {open ? <X className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
      </button>

      {/* Voice agent popup */}
      {open && (
        <div className="fixed bottom-20 right-6 bg-[#303030] p-6 rounded-2xl shadow-2xl text-center max-w-sm w-80 z-40">
          <h2 className="text-lg font-semibold mb-4 text-white">
            🎤 Talk to AI Voice Agent
          </h2>

          <div className="space-x-2 mb-3">
            <button
              onClick={startRecording}
              disabled={recording}
              className={`px-4 py-2 rounded-md text-white ${
                recording
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Start
            </button>

            <button
              onClick={stopRecording}
              disabled={!recording}
              className={`px-4 py-2 rounded-md text-white ${
                !recording
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              Stop
            </button>
          </div>

          <button
            onClick={sendToAI}
            disabled={!recordedAudio || processing}
            className={`px-4 py-2 rounded-md text-white ${
              !recordedAudio || processing
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {processing ? "Processing..." : "Send"}
          </button>

          {recordedAudio && (
            <audio
              controls
              src={recordedAudio}
              className="mt-4 w-full rounded-md"
            />
          )}
        </div>
      )}
    </>
  );
}
