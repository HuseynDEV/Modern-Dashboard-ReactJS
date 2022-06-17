import react, { useState } from "react";
import "./userList.css";
import { Delete } from "@mui/icons-material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { rows } from "../../Data";
import { Link } from "react-router-dom";

const UserList = () => {
  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter(item=>(
        item.id!=id
    )));
    console.log(data)
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "firstName",
      headerName: "First name",
      width: 160,
      renderCell: (params) => {
        return (
          <div
            className="userListUser"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <img
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
              src={params.row.avatar}
              alt=""
            />
            <div>{params.row.firstName}</div>
          </div>
        );
      },
    },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 100,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "Partners",
      headerName: "Partners",
      width: 250,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <Delete
              htmlColor="red"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <div style={{ height: 550, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default UserList;
