interface VideoMediaProps {
  videoEmbedFg: {
    videoEmbedUrl: string;
  };
}

interface AudioMediaProps {
  audioEmbedFg: {
    audioEmbedUrl: string;
  };
}

interface PortfolioMediasProps {
  videos?: VideoMediaProps[];
  audios?: AudioMediaProps[];
}

export function PortfolioMedias({ videos, audios }: PortfolioMediasProps) {
  if (!videos?.length && !audios?.length) {
    return null;
  }

  return (
    <section
      id="portfolio"
      className="bg-background w-full scroll-mt-[50px] py-10"
    >
      <div className="container mx-auto grid grid-cols-1 gap-8 p-4 md:grid-cols-2">
        {videos && videos.length > 0 && (
          <div className="space-y-3">
            <span className="text-xs uppercase">Videos//</span>
            <div className="flex flex-col gap-4">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="cms-embed-container aspect-video overflow-hidden rounded-lg shadow-lg"
                  dangerouslySetInnerHTML={{
                    __html: video.videoEmbedFg.videoEmbedUrl,
                  }}
                ></div>
              ))}
            </div>
          </div>
        )}

        {audios && audios.length > 0 && (
          <div className="space-y-3">
            <span className="text-xs uppercase">Audios//</span>
            <div className="flex flex-col gap-4">
              {audios.map((audio, index) => {
                const originalIFrame = audio.audioEmbedFg.audioEmbedUrl;

                const cleanIFrame = originalIFrame
                  .replace('sandbox="allow-scripts"', "")
                  .replace('security="restricted"', "");

                return (
                  <div
                    key={index}
                    className="cms-embed-container overflow-hidden rounded-lg shadow-lg"
                    dangerouslySetInnerHTML={{
                      __html: cleanIFrame,
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
