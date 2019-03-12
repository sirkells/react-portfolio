import React, { Component } from "react";
import SOCIAL_PROFILES from "../data/socialProfile";

class SocialProfile extends Component {
  render() {
    const { link, image } = this.props.socialProfile;
    return (
      <span>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt="social-profile"
            style={{ width: 30, height: 30, margin: 5 }}
          />
        </a>
      </span>
    );
  }
}

class SocialProfiles extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Connect with me?</h2>
        <div>
          {SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
            return (
              <SocialProfile
                key={SOCIAL_PROFILE.id}
                socialProfile={SOCIAL_PROFILE}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default SocialProfiles;
