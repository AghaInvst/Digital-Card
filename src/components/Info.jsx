import React from 'react';

const Info = ({ photo, name, button }) => {
  return (
    <div className="info">
      <img src={photo} alt={name} className="info__photo" />
      <h1 className="info__name">{name}</h1>
      <p className="info__subject">Frontend Developer</p>
      <p className="info__website">person.website</p>
      <div className="butt">
        <button className="info__email">
            Email
        </button>  
        <button className="info__linkedln">
            Linkedln
        </button>
      </div>
    </div>
  );
};

export default Info;
