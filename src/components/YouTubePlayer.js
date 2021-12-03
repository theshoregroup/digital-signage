function YouTubePlayer({ query, params }) {
  if (query == null) {
    query = "9Auq9mYxFEE";
  }

  let fullLink = "https://youtube.com/embed/" + query + params;

  return (
    <iframe
      width="1350"
      height="759"
      src="https://www.youtube.com/embed/9Auq9mYxFEEcc_load_policy=1&cc_lang_pref=en"
      title="YouTube video player"
      frameborder="0"
      allow="acce
      EMBED OPTIONSlerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      autoplay="True"
      
    ></iframe>
  );
}

export default YouTubePlayer;
