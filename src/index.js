import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2 className="my-style">{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      tel="+123 456 789"
      email="b@beyonce.com"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    />
    <Card
      name="Jack Baur"
      tel="+321 456 789"
      email="jack@baur.com"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    />
  </div>,

  document.getElementById("root")
);
