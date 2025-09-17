// This file acts as a serverless function for your API endpoint.
export default function handler(request, response) {
  // Array of HD anime video URLs.
  // In a real-world application, you would fetch these from a database or a specialized API.
  const videoUrls = [
    'https://cdn.animeclips.com/videos/gintama-1-hd.mp4',
    'https://cdn.animeclips.com/videos/naruto-2-hd.mp4',
    'https://cdn.animeclips.com/videos/one-piece-3-hd.mp4',
    'https://cdn.animeclips.com/videos/my-hero-academia-4-hd.mp4',
    'https://cdn.animeclips.com/videos/demon-slayer-5-hd.mp4'
  ];

  // Logic to select a random URL from the array.
  const randomUrl = videoUrls[Math.floor(Math.random() * videoUrls.length)];

  // The JSON data to be returned in the API response.
  const data = {
    message: 'Random HD anime video fetched successfully!',
    videoUrl: randomUrl,
    quality: 'HD',
    status: 'success',
    timestamp: new Date().toISOString()
  };

  // Setting the response header and sending the JSON data.
  response.setHeader('Content-Type', 'application/json');
  response.status(200).json(data)
    ;
}
