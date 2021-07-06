import React from "react";
import { TextField, Typography } from "@material-ui/core";
import { CardButton } from "../../../../../../globals/index";

function AccountDetailPanel({ value, index, content }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={index}>
      {value === index && (
        <div
          style={{
            backgroundColor: "#fff",
            padding: 40,
            borderRadius: 5,
            boxShadow: "0 8px 16px 0 rgb(146 184 255 / 20%)",
            marginTop: 5,
          }}
        >
          <TextField
            required
            id="outlined-required"
            label="Full Name"
            defaultValue="Kuro"
            variant="outlined"
            style={{ width: "100%" }}
          />
          <TextField
            required
            id="outlined-required"
            label="Email address"
            defaultValue="Kuro@yuuki"
            variant="outlined"
            style={{ width: "100%", marginTop: 30 }}
          />
          <TextField
            required
            id="outlined-required"
            label="Phone number"
            defaultValue="0123456789"
            variant="outlined"
            style={{ width: "100%", marginTop: 30 }}
          />
          <Typography
            style={{
              marginTop: 40,
              marginBottom: 25,
              color: "#727695",
              fontSize: 20,
              fontWeight: 500,
              width: "100%",
            }}
          >
            Password Change
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 30,
            }}
          >
            <TextField
              id="outlined-helperText"
              type="password"
              label="Current password"
              defaultValue=""
              helperText="leave blank to leave unchanged"
              variant="outlined"
              style={{ width: "49%" }}
            />
            <TextField
              id="outlined-helperText"
              type="password"
              label="New password"
              defaultValue=""
              helperText="leave blank to leave unchanged"
              variant="outlined"
              style={{ width: "49%" }}
            />
          </div>
          <TextField
            id="outlined-helperText"
            type="password"
            label="Confirm new password"
            defaultValue=""
            helperText="leave blank to leave unchanged"
            variant="outlined"
            style={{ width: "100%", marginTop: 30 }}
          />

          <CardButton
            style={{
              borderRadius: 32,
              marginTop: 40,
              boxShadow: "0 5px 28.5px 1.5px rgb(255 25 73 / 10%)",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            <div>Save Changes</div>
          </CardButton>
        </div>
      )}
    </div>
  );
}
export default AccountDetailPanel;
