import { Outlet, useNavigate } from "react-router-dom";

const UserGuard = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  return <Outlet />;
};

export default UserGuard;
