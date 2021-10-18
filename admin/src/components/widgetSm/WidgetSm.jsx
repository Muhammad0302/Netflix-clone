import React from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);
  const url = "http://localhost:8800/api/";
  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get(url + "users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmJjMDlkOWI2MDc5M2JiMWVjZTE2NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDQ3OTMyOCwiZXhwIjoxNjM0OTExMzI4fQ.iU9TIkPafPg8A11JzvF15wlgarwXgLfIos2J5SS918M",
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  // console.log(newUsers);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetSm;
