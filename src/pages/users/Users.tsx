import { useState } from "react";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";
import "./users.scss";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "E-mail",
    type: "string",
    width: 160,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "string",
    width: 120,
    editable: true,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    // description: "This column has a value getter and is not sortable.",
    type: "string",
    // sortable: false,
    width: 160,
    editable: true,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
];

const Users = () => {
  const [Open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {Open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
