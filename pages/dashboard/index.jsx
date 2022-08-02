import React from "react";
import { DashboardLayout } from "../../layouts";
import { AuthContext } from "../../firebase/auth";

export default function Dashboard() {
  return (
    <AuthContext.Consumer>
      {(user) => {
        console.log({ xuser: user });
        return (
          <DashboardLayout>
            <div className="">Welcome</div>
          </DashboardLayout>
        );
      }}
    </AuthContext.Consumer>
  );
}
