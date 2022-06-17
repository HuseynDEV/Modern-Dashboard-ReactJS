import "./productList.css";
import react, { useState } from "react";
import { Delete } from "@mui/icons-material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { productRows } from "../../Data";
import { Link } from "react-router-dom";
export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id != id));
    console.log(data);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "Product",
      headerName: "Product",
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
              src={params.row.img}
              alt=""
            />
            <div>{params.row.name}</div>
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 130 },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 100,
    },

    {
      field: "status",
      headerName: "Status",
      width: 250,
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
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
}
