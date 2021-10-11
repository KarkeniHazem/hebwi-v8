import React from "react";

const Player = ({ player }) => {
  const kda =
    player.deaths != 0
      ? ((player.kills + player.assists) / player.deaths).toFixed(2)
      : player.kills + player.assists;

  return (
    <div>
      <div className="fut-player-card">
        <div className="player-card-top">
          <div className="player-master-info">
            <div className="player-rating">
              <span>{player.price}</span>
            </div>
            <div className="player-position">
              <span>{player.role}</span>
            </div>
            <div className="player-nation">
              <img src={player.countryUrl} alt="Argentina" draggable="false" />
            </div>
            <div className="player-club">
              <img src={player.teamUrl} alt="Barcelona" draggable="false" />
            </div>
          </div>
          <div className="player-picture">
            <img src={player.imgUrl} alt="Messi" draggable="false" />
            <div className="player-extra">
              <span>{player.realname}</span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="player-card-bottom">
          <div className="player-info">
            <div className="player-name">
              <span>{player.name}</span>
            </div>
            <div className="player-features">
              <div className="player-features-col">
                <span>
                  <div className="player-feature-value">{player.kills}</div>
                  <div className="player-feature-title">KILLS</div>
                </span>
                <span>
                  <div className="player-feature-value">{player.assists}</div>
                  <div className="player-feature-title">ASSISTS</div>
                </span>
                <span>
                  <div className="player-feature-value">{player.deaths}</div>
                  <div className="player-feature-title">DEATHS</div>
                </span>
              </div>
              <div className="player-features-col">
                <span>
                  <div className="player-feature-value">{kda}</div>
                  <div className="player-feature-title">KDA </div>
                </span>
                <span>
                  <div className="player-feature-value">35</div>
                  <div className="player-feature-title">DEF</div>
                </span>
                <span>
                  <div className="player-feature-value">{player.pickRate}</div>
                  <div className="player-feature-title">PICKED</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
