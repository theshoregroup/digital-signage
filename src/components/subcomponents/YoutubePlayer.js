export default function YoutubePlayer(){
    return (
        <div className="px-10 ">
        <iframe
          width="1100"
          height="619"
          className=""
          src="https://www.youtube.com/embed/9Auq9mYxFEE?autohide=1&autoplay=1&cc_load_policy=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          autoPlay="True"
        />
      </div>
      );
}