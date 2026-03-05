import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AUTH_API } from "../api";

function ProtectedRoute({ children }) {
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) return setIsValid(false);

    fetch(AUTH_API.VERIFY, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setIsValid(data.valid))
      .catch(() => setIsValid(false));
  }, []);

  if (isValid === null) return <div>Checking authentication...</div>;
  if (!isValid) return <Navigate to="/admin/login" replace />;
  return children;
}

export default ProtectedRoute;
