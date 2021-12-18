import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UserCard = ({ isLoading, name, picture }) => {
  return (
    <Wrapper>
      <div className="avatar">
        {isLoading ? (
          <Skeleton circle height="100%" containerClassName="avatar" />
        ) : (
          <img src={picture.large} className="avatar" />
        )}
      </div>
      <div className="user-info">
        {isLoading ? <Skeleton /> : <h5>{name.first}</h5>}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--clr-white);
  border: 1px solid var(--clr-primary-8);
  margin: 1rem 0;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  .avatar {
    display: block;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    object-fit: cover;
  }

  .user-info {
    width: 100%;
  }
`;

export default UserCard;
