import React from "react";
import Spinner from "./Spinner";
const CharacterItem = (item) => {

  return (
    <div className='card'>
    <div className='card-inner'>
      <div className='card-front'>
        <img src={item.item.img} alt='' />
      </div>
      <div className='card-back'>
        <h1>{item.item.name}</h1>
        <ul>
          <li>
            <strong>Actor Name:</strong> {item.item.portrayed}
          </li>
          <li>
            <strong>Nickname:</strong> {item.item.nickname}
          </li>
          <li>
            <strong>Birthday:</strong> {item.item.birthday}
          </li>
          <li>
            <strong>Status:</strong> {item.item.status}
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default CharacterItem;
