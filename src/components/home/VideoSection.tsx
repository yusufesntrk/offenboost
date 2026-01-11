import { useState } from "react";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "O7a9ADGtplQ";

  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary shadow-xl">
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="Kurzvorstellung"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <>
              {/* Video Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Kurzvorstellung Video"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Play Button Overlay */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
              >
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
                  </div>
                  <p className="text-white font-medium text-lg">Kurzvorstellung</p>
                  <p className="text-white/70 text-sm">Yusuf Esentürk</p>
                </div>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
