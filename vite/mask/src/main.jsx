import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserProfile from "./UserProfile";

const App = () => {
  const user = {
    name: "Prachi Mishra",
    avatar_url: "https://wallpapercave.com/wp/wp7744665.jpg",
    title: "Web Developer",
    skillsets: [
      {
        icon: "https://tse4.mm.bing.net/th?id=OIP.Quq7YO6nNVwYZay4NoeocgHaHa&pid=Api&P=0&h=180",
        description: "HTML",
      },
      {
        icon: "https://tse1.mm.bing.net/th?id=OIP.pXrq6xy_Gxua3qTfGZLXqwHaKc&pid=Api&P=0&h=180",
        description: "CSS",
      },
      {
        icon: "https://tse3.mm.bing.net/th?id=OIP.JroZA6yi2vhYkSOENfSsVgHaIh&pid=Api&P=0&h=180",
        description: "JavaScript",
      },
      {
        icon: "https://tse1.mm.bing.net/th?id=OIP.-BpvNzwkSx9w9LdAK1qzcgHaGo&pid=Api&rs=1&c=1&qlt=95&w=134&h=120",
        description: "React",
      },
      {
        icon: " https://tse3.mm.bing.net/th?id=OIP.KqsJnpF3kPe4W1Nlw8QtsAHaHa&pid=Api&P=0&h=180",
        description: "MongoDB",
      },
    ],
  };

  return (
    <div>
      <h1>User Profile</h1>
      <UserProfile
        name={user.name}
        avatar_url={user.avatar_url}
        title={user.title}
        skillsets={user.skillsets}
      />
    </div>
  );
};

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
