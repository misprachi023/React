import React from "react";

const UserProfile = ({ name, avatar_url, title, skillsets }) => {
  return (
    <div className="user-profile">
      <div className="user-details">
        <h2>{name}</h2>
        <p>{title}</p>
        <div className="skillsets">
          <h3>Skillsets : </h3>
          <ul>
            {skillsets.map((skill, index) => (
              <li key={index}>
                <img src={skill.icon} />
                {skill.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img src={avatar_url} alt={`Avatar for ${name}`} className="avatar" />
    </div>
  );
};

export default UserProfile;
