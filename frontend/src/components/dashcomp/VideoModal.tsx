import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  videoId: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoId, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white z-10 hover:opacity-80 transition-opacity"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="relative pt-[56.25%]">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Video player"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default VideoModal;