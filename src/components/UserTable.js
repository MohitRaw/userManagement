import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

const UserTable = () => {
  const { users, loading, error, theme } = useContext(UserContext);
  const [expandedUserId, setExpandedUserId] = useState(null);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleToggleDetails = (id) => {
    setExpandedUserId((prev) => (prev === id ? null : id));
  };
  return (
    <div
      className={`overflow-hidden shadow sm:rounded-md ${
        theme === "dark" ? "bg-gary-800" : "bg-white"
      }`}
    >
      <table
        className={`min-w-full divide-y divide-gary-200 ${
          theme === "dark" ? "bg-gary-800" : "bg-white"
        }`}
      >
        <thead className={theme === "dark" ? "bg-gray-500" : "bg-gary-50"}>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gary-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gary-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gary-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gary-500 uppercase tracking-wider">
              Company
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gary-500 uppercase tracking-wider">
              Details
            </th>
          </tr>
        </thead>
        <tbody className={theme === "dark" ? "bg-gray-400" : "bg-gary-50"}>
          {Array.isArray(users) &&
            users?.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gary-900 ">
                  Details{user.id}
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gary-900 ">
                  {user.name}
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gary-900 ">
                  {user.email}
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gary-900 ">
                  {user.company.name}
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gary-900 ">
                  <button
                    onClick={() => handleToggleDetails(user.id)}
                    className="text-blue-600 hover:underline"
                  >
                    {expandedUserId === user.id
                      ? "Hide Details"
                      : "Show Details"}
                  </button>
                </td>
                {expandedUserId === user.id && (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-3 whitespace-nowrap text-sm text-gary-600 "
                    >
                      Address:{user.address.city}
                      Phone:{user.phone}
                    </td>
                  </tr>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
