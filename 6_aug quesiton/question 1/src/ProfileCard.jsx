import React, { memo } from "react";

const ProfileCard = memo(({ title, city }) => {
  console.log("ProfileCard rendered!");

  return (
    <div>
      <h2>{title}</h2>
      <p>{city}</p>
    </div>
  );
});

export default ProfileCard;