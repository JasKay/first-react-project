import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props){
return (
    <div>
      <h1 className="heading">My Contacts for Today</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img= {props.img} />
        </div>
        <div className="bottom">
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
          
        </div>
      </div>
    </div>
    );
}

export default Card;