export default function Images() {
    return (
      <div id="wd-images">
        <h4>Images</h4>
  
        <h5>Remote image</h5>
        <img
          id="wd-startship"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          alt="SpaceX Starship"
          width="400"
        />
  
        <h5>Local image</h5>
        <img
          id="wd-teslabot"
          src="/images/teslabot.jpg"
          alt="Tesla Bot"
          width="400"
        />

        <h5>My image</h5>
      <img
        id="wd-your-image"
        src="/images/my-image.jpg"
        alt="My image"
        width="400"
      />

      <h5>Public image example</h5>
      <img
        id="wd-ai-image"
        src="https://assets.science.nasa.gov/dynamicimage/assets/science/missions/swift-observatory/news/2026/link-tech-demo/LINK%20Solar%20Panel%20Pic%209.4.26.png?w=490&h=297&fit=clip&crop=faces%2Cfocalpoint"
        alt="React logo"
        width="200"
      />
      </div>
    );
  }