import React from "react";

const Artist = props => {
  if (!props.artist) return null;
  const { images, name, followers, genres } = props.artist;
  const genre = [genres.join(", ")];
  console.log(genre);
  const style = {
    color: "black",
    fontFamily: "Georgia",
    fontStyle: "italic",
    fontWeight: "normal"
  };
  return (
    <div>
      <br />
      {/* <div className="image">
        <img
          //   images[0] && images[0].url handles no image data
          src={images[0] && images[0].url}
          alt="artist-image"
        />
      </div> */}
      <div className="content">
        <div className="left floated meta" style={style}>
          {name}
        </div>
        <div className="right floated meta" style={style}>
          <i className="user icon" />
          {followers.total}
        </div>

        <a style={style}>{genres.join(", ")}</a>
      </div>
    </div>
  );
};

export default Artist;
