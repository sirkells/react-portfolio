import React from "react";

const Artist = props => {
  if (!props.artist) return null;
  const { images, name, followers, genres } = props.artist;
  const genre = [genres.join(", ")];
  console.log(genre);

  return (
    <div className="ui centered card">
      {/* <div className="image">
        <img
          //   images[0] && images[0].url handles no image data
          src={images[0] && images[0].url}
          alt="artist-image"
        />
      </div> */}
      <div className="green content">
        <a className="header">{name}</a>
        <div className="description">{genres.join(", ")}</div>
      </div>
      <div className="extra content">
        <a>
          <i className="user icon" />
          {followers.total} followers
        </a>
      </div>
    </div>
  );
};

export default Artist;
