import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import CardMembershipIcon from '@material-ui/icons/CardMembership'; 
import { CardActionHover } from "../../../../../globals";

function ActionLinksHover() {


  function handleClickHeart(){
  }

  function handleClickSync(){
  }
  
  return (
    <div className="action-links">
      <CardActionHover>
        <AiOutlineHeart title="Wishlist" onClick={handleClickHeart} />
      </CardActionHover>
      <CardActionHover>
        <CardMembershipIcon title="Assign" onClick={handleClickSync} />
      </CardActionHover>
    </div>
  );
}

export default ActionLinksHover;
