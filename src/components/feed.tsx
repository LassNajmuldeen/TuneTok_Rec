"use client";

import React, { useState } from "react";

// Define the Video type
type Video = {
  id: number;
  url: string;
  title: string;
  artist: string;
  genre: string;
  likes: number;
  comments: string[];
};

// Initial videos array
const initialVideos: Video[] = [
  {
    id: 1,
    url: "/videos/video1.mp4",
    title: "Sunset",
    artist: "Lucki",
    genre: "Rap",
    likes: 0,
    comments: ["Great song!", "Love this track!"], // Write some comments
  },
  {
    id: 2,
    url: "/videos/video2.mp4",
    title: "Live Show",
    artist: "Red Hot Chili Peppers",
    genre: "Rock",
    likes: 0,
    comments: ["Amazing visuals!", "Rock on!"],
  },
  {
    id: 3,
    url: "/videos/video3.mp4",
    title: "Life Will Change",
    artist: "Lyn Inaizumi",
    genre: "Jazz",
    likes: 0,
    comments: [],
  },
];

const VideoFeed: React.FC = () => {
  const [videoData, setVideoData] = useState<Video[]>(initialVideos);

  const handleComment = (id: number, comment: string) => {
    setVideoData((prev) =>
      prev.map((video) =>
        video.id === id
          ? { ...video, comments: [...video.comments, comment] }
          : video
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-4">
      <header className="w-full text-center py-4 bg-gray-800">
        <h1 className="text-3xl font-bold text-green-500">TuneTok</h1>
      </header>

      {/* Video Feed */}
      <div className="w-full max-w-2xl space-y-8">
        {videoData.map((video) => (
          <div key={video.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            {/* Video Player */}
            <video
              src={video.url}
              controls
              className="w-full rounded-lg"
              style={{ maxHeight: "300px" }}
            />

            {/* Video Details */}
            <h3 className="mt-4 text-lg font-bold">{video.title}</h3>
            <p className="text-sm text-gray-400">{video.artist}</p>
            <p className="text-sm text-gray-400">{video.genre}</p>

            {/* Comment Section */}
            <div className="mt-4">
              <h4 className="text-md font-semibold mb-2">Comments</h4>
              <div className="max-h-40 overflow-y-auto bg-gray-700 p-2 rounded-lg space-y-2">
                {video.comments.length > 0 ? (
                  video.comments.map((comment, index) => (
                    <p
                      key={index}
                      className="text-sm bg-gray-800 p-2 rounded-lg"
                    >
                      {comment}
                    </p>
                  ))
                ) : (
                  <p className="text-sm text-gray-400">No comments yet.</p>
                )}
              </div>

              {/* Add Comment */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const comment = (e.target as any).elements.comment.value;
                  if (comment.trim() === "") return;
                  handleComment(video.id, comment);
                  (e.target as any).reset();
                }}
                className="mt-2 flex space-x-2"
              >
                <input
                  name="comment"
                  placeholder="Add a comment..."
                  className="flex-1 p-2 bg-gray-600 text-white rounded"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  Comment
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoFeed;
