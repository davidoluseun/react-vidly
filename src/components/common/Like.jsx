import React from "react";

const Like = ({ item, like, onLike }) => {
  const classes = like ? "fas fa-heart" : "far fa-heart";

  return (
    <i
      onClick={() => onLike(item)}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;
