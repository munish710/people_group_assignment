import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import UserCard from "../components/UserCard";
import UserCardSkeleton from "../components/UserCardSkeleton";

const API_URL = "https://randomuser.me/api/";

const Home = ({ logoutUser }) => {
  const listEnd = useRef(null);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const mockUsers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const response = await fetch(`${API_URL}?results=10&page=${page}`);
      const responseData = await response.json();
      setUsers((prevUsers) => {
        return [...prevUsers, ...responseData.results];
      });
      setIsLoading(false);
    };
    fetchUsers();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px 50px 0px" }
    );

    observer.observe(listEnd.current);

    return () => {
      observer.unobserve();
    };
  }, []);

  return (
    <Wrapper>
      <section className="section-center">
        <div className="header">
          <h3>Infinte Users</h3>
          <button className="btn" onClick={logoutUser}>
            Logout
          </button>
        </div>
        <div className="list-container">
          {isLoading
            ? mockUsers.map((item) => <UserCardSkeleton key={item} />)
            : users.map((user, index) => (
                <UserCard
                  key={index}
                  isLoading={isLoading}
                  name={user.name}
                  picture={user.picture}
                />
              ))}
          <div ref={listEnd}></div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .header {
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (min-width: 480px) {
    section {
      max-width: 50%;
    }
  }
`;

export default Home;
