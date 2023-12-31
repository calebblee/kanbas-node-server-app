import * as client from "./client.js";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/sign in");
  };
  const save = async () => {
    await client.updateUser(account);
  };
  useEffect(() => {
    fetchAccount();
  }, []);
  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input value={account.password}
            className="form-control w-50"
            onChange={(e) => setAccount({
              ...account,
              password: e.target.value
            })} />
          <input value={account.firstName}
            className="form-control w-50"
            onChange={(e) => setAccount({
              ...account,
              firstName: e.target.value
            })} />
          <input value={account.lastName}
            className="form-control w-50"
            onChange={(e) => setAccount({
              ...account,
              lastName: e.target.value
            })} />
          <input value={account.dob}
            className="form-control w-50"
            onChange={(e) => setAccount({
              ...account,
              dob: e.target.value
            })} />
          <input value={account.email}
            className="form-control w-50"
            onChange={(e) => setAccount({
              ...account,
              email: e.target.value
            })} />
          <select
            className="form-select w-50"
            onChange={(e) => setAccount({
              ...account,
              role: e.target.value
            })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button
            className="btn btn-primary me-2"
            onClick={save}>
            Save
          </button>
          <button 
          className="btn btn-danger me-2"
          onClick={signout}>
            Signout
          </button>
          <Link to="/Kanbas/admin/users"
            className="btn btn-warning">
            Users
          </Link>
        </div>
      )}
    </div>
  );
}
export default Account;