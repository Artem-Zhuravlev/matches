import React from "react";
import AdminNav from "../Components/admin/nav/AdminNav";

const AdminLayout = props => {
  return (
    <div className="admin_container">
      <aside className="admin_left_nav">
        <AdminNav />
      </aside>
      <main className="admin_right">{props.children}</main>
    </div>
  );
};

export default AdminLayout;
