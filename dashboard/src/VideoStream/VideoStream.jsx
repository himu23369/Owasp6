import React, { useState, useEffect } from "react";

const StreamDisplay = () => {
  const [streamUrl, setStreamUrl] = useState("");

  useEffect(() => {
    // Function to fetch the stream and continuously update the src attribute
    const fetchStream = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/monitor", {
          method: "GET",
          cache: "no-store", // Ensure we always get the latest frame
        });
        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          buffer += chunk;

          // Split buffer into frames based on the boundary
          const frames = buffer.split("frame");
          buffer = frames.pop();

          // Get the last frame
          const lastFrame = frames[frames.length - 1];

          // Convert the last frame to a blob URL
          if (lastFrame) {
            const blob = new Blob([lastFrame], { type: "image/jpeg" });
            const blobUrl = URL.createObjectURL(blob);
            setStreamUrl(blobUrl);
          }
        }
      } catch (error) {
        console.error("Error fetching stream:", error);
      }
    };

    fetchStream();

    // Clean up the blob URL when component unmounts
    return () => URL.revokeObjectURL(streamUrl);
  }, []);

  return <img src={streamUrl} alt="Stream" />;
};

export default StreamDisplay;
