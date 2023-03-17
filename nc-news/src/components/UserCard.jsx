import { Card } from "react-bootstrap";

const UserCard = ({ user }) => {
    /// convert cards to cols later
    return (
      <li>
        <Card className="d-flex flex-row mb-3 user_card align-items-center">
          <div className="img_container_user">
            <img
              src={user.avatar_url}
              alt="User avatar"
              className="user_card_img"
            />
          </div>
          <Card.Body className="d-flex flex-row justify-content-start align-items-center">
            <Card.Title className="card-components mb-0">
              {user.username}
            </Card.Title>

            <Card.Text className="card-components mb-0">{user.name}</Card.Text>
          </Card.Body>
        </Card>
      </li>
    );
}
export default UserCard;

/**
 *   <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-4">
              <img
                src={user.avatar_url}
                className="w-25 user_card_img"
                alt="user avatar"
              />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{user.username}</h5>
                <p className="card-text">{user.name}</p>
              </div>
            </div>
          </div>
        </div>      
 */