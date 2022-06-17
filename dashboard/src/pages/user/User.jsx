import React from "react";
import "./user.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material/";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { rows } from "../../Data";

export default function User() {
  const params = useParams();

  const [data, setData] = useState(
    rows.filter((data) => data.id == params.userId)
  );

  console.log(data);

  // console.log(params.userId)
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>

        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={data[0].avatar} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{data[0].firstName}</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{data[0].email}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+{data[0].number}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{data[0].email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{data[0].Address}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>{data[0].firstName}</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>{data[0].firstName + ' '+ data[0].lastName}</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>{data[0].email}</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>{(data[0].number)}</label>
                <input
                  type="text"
                  placeholder={data[0].number}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>{data[0].Address}</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
