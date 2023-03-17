import { useState, useEffect, useContext } from "react";
import { MessageContext } from "../contexts/Message";
import { getUsers } from "../api";
import LoaderLarge from "./LoaderLarge";
import UserCard from "./UserCard";
import NoUsers from "./NoUsers";

const UserList = () => {
  const { setMessage } = useContext(MessageContext);

  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usersError, setUsersError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((results) => {
        setUsersList(results);
        setLoading(false);
        setUsersError(false);
        setMessage({
          msgType: null,
          showMsg: false,
          variant: "",
          title: "",
          msg: "",
        });
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setUsersError(404);
          setLoading(false);
        } else if (error.response.status === 500) {
          setUsersError(500);
          setLoading(false);
        } else {
          setLoading(false);
          setUsersError(true);
          setMessage({
            msgType: "error",
            showMsg: true,
            variant: "danger",
            title: "API Error",
            msg: "Cannot load users, please try again later.",
          });
        }
      });
  }, [setMessage]);

  if (loading) return <LoaderLarge content={"Loading Users..."} />;

  if (usersError === 500)
    return <LoaderLarge content={"Error Loading Users..."} />;

  if (usersError === 404) return <NoUsers />;

  return (
    <section>
      <ul className="list-unstyled">
        {usersList.map((element) => {
          return <UserCard user={element} key={element.username} />;
        })}
      </ul>
    </section>
  );
};

export default UserList;
