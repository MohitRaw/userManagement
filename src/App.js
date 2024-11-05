import logo from "./logo.svg";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import { UserContext, UserProvider } from "./context/userContext";
import { useContext } from "react";
import UserTable from "./components/UserTable";

function App() {
  const { users, loading, error, theme } = useContext(UserContext);
  return (
    <div
      className={`${
        theme ? "dark" : ""
      } min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark::text-white`}
    >
      <ThemeToggle />
      <UserTable />
    </div>
  );
}

export default () => (
  <UserProvider>
    <App />
  </UserProvider>
);
