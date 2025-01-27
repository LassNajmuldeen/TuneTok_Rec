"use client";

import React, { useState } from "react";

// TODO: import and test a few videos
const videos = [
  {
    id: 1,
    url: "/videos/video1.mp4",
    title: "Song 1",
    artist: "Artist 1",
    genre: "Rap",
  },
  {
    id: 2,
    url: "/videos/video2.mp4",
    title: "Song 2",
    artist: "Artist 2",
    genre: "Rock",
  },
  {
    id: 3,
    url: "/videos/video3.mp4",
    title: "Song 3",
    artist: "Artist 3",
    genre: "Jazz",
  },
];

const VideoFeed: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="h-screen w-full bg-gray-900 text-white overflow-y-auto">
      <div className="flex flex-col items-center">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`w-full h-screen flex flex-col items-center justify-center transition-transform ${
              index === currentIndex ? "opacity-100" : "opacity-50"
            }`}
          >
            <video
              src={video.url}
              controls
              autoPlay={index === currentIndex}
              className="w-3/4 h-3/4 rounded-lg shadow-lg"
            />
            <h2 className="text-xl mt-4">{video.title}</h2>
            <p className="text-sm text-gray-400">{video.artist}</p>
            <p className="text-sm text-gray-500">{video.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoFeed;
