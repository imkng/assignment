import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../Component/Card";

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8801/users");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleApi = async () => {
    try {
      for (var i = 0; i < 100; i++) {
        const res = await axios.get("https://randomuser.me/api/");
        const results = res.data;
        console.log(results.results);
        console.log(results.results[0].id.value);

        await axios.post("http://localhost:8801/users", {
          firstName: results.results[0].name.first,
          lastName: results.results[0].name.last,
          email: results.results[0].email,
          phone: results.results[0].phone,
          cover: results.results[0].picture.medium,
        });
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    await axios.delete("http://localhost:8801/users");
    window.location.reload();
  };
  return (
    <div>
      <h1>User Shop</h1>
      <section>
        <div className="button-de">
          <button className="button" onClick={handleApi}>
            Add Users
          </button>
          <button className="btn-delete" onClick={handleDelete}>Delete All</button>
          <button className="button">
            <Link to="/search">
              Search
            </Link>
          </button>
        </div>

        <div className="container">
          <div className="cards">
            {users.map((user) => (
              <Card
                key={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                phone={user.phone}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
