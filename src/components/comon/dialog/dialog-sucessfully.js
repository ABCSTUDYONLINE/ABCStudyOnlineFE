import React from 'react'
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function DialogSuccessfully({content}){
    return(
        <div style={{alignItems:'center'}}>
            <CheckCircleIcon
            style={{
              fontSize: 250,
              fontWeight: 700,
              marginTop: 60,
              color: "#0eb582",
            }}
          />
          <div style={{fontSize:28,fontWeight:600,color:"#252525"}}>
              {content}
          </div>
        </div>
    )
}

export default DialogSuccessfully