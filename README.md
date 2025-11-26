This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Object Detection

A real-time object detection web application built with Next.js and TensorFlow. This application uses your webcam to detect and identify objects in live video streams, with special highlighting for person detection.

## Features

- **Real-time Object Detection**: Uses COCO-SSD model to detect objects at 100ms intervals
- **Live Webcam Feed**: Stream video directly from your device's webcam
- **Visual Bounding Boxes**: Displays colored bounding boxes around detected objects
- **Person Detection Alerts**: Special highlighting and alerts when people are detected
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Fast Performance**: Leverages TensorFlow.js for in-browser processing

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.0.3
- **UI Library**: React 19.2.0
- **ML Model**: [COCO-SSD](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd) via TensorFlow.js
- **Styling**: Tailwind CSS 4
- **Webcam Integration**: react-webcam 7.2.0

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn package manager
- Webcam access on your device

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd object-detection
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Usage

1. Allow camera permissions when prompted by your browser
2. The application will automatically load the COCO-SSD model (loading indicator displays during this time)
3. Once loaded, your webcam feed will appear with real-time object detection
4. Detected objects are marked with colored bounding boxes:
   - **Red boxes**: Person detected (triggers an alert)
   - **Blue boxes**: Other objects detected
5. Labels appear above each bounding box indicating the object class

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
├── src/
│   └── app/
│       ├── page.js           # Main page component
│       ├── layout.js         # Root layout
│       └── globals.css       # Global styles
├── components/
│   └── object-detection.js   # Main detection component
├── utils/
│   └── render-predictions.js # Canvas rendering logic
└── package.json              # Project dependencies
```

## How It Works

### Object Detection Pipeline

1. **Model Loading**: COCO-SSD model is loaded from TensorFlow Hub on component mount
2. **Video Stream**: React-webcam captures live video from your device camera
3. **Detection**: The model analyzes video frames every 10ms to detect objects
4. **Rendering**: Detected objects are drawn on a canvas overlay with bounding boxes and labels
5. **Alerts**: If a person is detected, a visual alert is triggered

### Key Components

- **ObjectDetection** ([components/object-detection.js](components/object-detection.js)): Main component managing webcam, model loading, and detection loop
- **renderPredictions** ([utils/render-predictions.js](utils/render-predictions.js)): Handles canvas drawing for bounding boxes and labels

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Any modern browser supporting:
  - WebRTC for webcam access
  - Canvas API
  - WebGL (for TensorFlow.js GPU acceleration)

## Performance Notes

- Detection runs at ~100 FPS on modern hardware
- Model size: ~90MB (downloaded on first use)
- Best performance with GPU support enabled
- Mobile performance may vary depending on device capabilities

## Limitations & Future Improvements

- Currently alerts on every detected person (can be debounced)
- Limited to COCO-SSD model detection classes
- No person tracking across frames
- No data persistence or recording

## License

This project is open source and available under the MIT License.

## Troubleshooting

**Camera not working?**
- Check browser permissions for camera access
- Ensure no other application is using your webcam
- Try a different browser

**Model takes too long to load?**
- This is normal on first run (~30 seconds)
- Subsequent sessions will be faster with cached model
- Check your internet connection

**Performance issues?**
- Close other browser tabs
- Reduce browser window size
- Disable browser extensions that may interfere

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TensorFlow.js Guide](https://www.tensorflow.org/js)
- [COCO-SSD Model](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd)
- [Tailwind CSS](https://tailwindcss.com/docs)
