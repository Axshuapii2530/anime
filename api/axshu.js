// This file is a serverless function that returns a random anime-style video URL.
export default function handler(request, response) {
  const videoUrls = [
    // ✅ Free anime-style short videos (public domain / royalty-free)
    "https://cdn.pixabay.com/video/2023/07/18/173232-848637200_large.mp4", // anime girl looking at sky
    "https://cdn.pixabay.com/video/2022/11/25/139160-773580755_large.mp4", // anime-style train background
    "https://cdn.pixabay.com/video/2024/01/05/195232-898158702_large.mp4", // anime night street loop
    "https://cdn.pixabay.com/video/2022/08/23/127988-743581783_large.mp4", // anime-style landscape
    "https://cdn.pixabay.com/video/2023/02/10/152637-801046692_large.mp4"  // anime clouds moving
  ];

  if (videoUrls.length === 0) {
    return response.status(404).json({ message: 'No video URLs found in the list.' });
  }

  const randomUrl = videoUrls[Math.floor(Math.random() * videoUrls.length)];

  const data = {
    videoUrl: randomUrl,
    message: "Random anime short video fetched successfully.",
    timestamp: new Date().toISOString()
  };

  response.status(200).json(data);
}
