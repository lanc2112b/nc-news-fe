import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Row, Col } from 'react-bootstrap';

import LoaderLarge from './LoaderLarge';
import { getUserById } from '../api';

const UserProfile = () => {

    const { user_id } = useParams();
    
    const [profileData, setProfileData] = useState({});
    const [loading, setLoading] = useState(true);
    const [profileError, setProfileError] = useState(null);
    
    useEffect(() => {
      setLoading(true);
      setProfileData({});
        getUserById(user_id)
          .then((result) => {
            setProfileData(result);
              setLoading(false);
              setProfileError(null);
          })
          .catch((error) => {
            setProfileError(error.response.status);
            setLoading(false);
          });
    }, [user_id]);

  if (loading) return <LoaderLarge content={"Loading Profile..."} />;

  if (profileError === 500)
      return <LoaderLarge content={"Error Loading Profile..."} />;
    
    if (profileError === 404)
      return <LoaderLarge content={"Error Loading User..."} />;

    return (
      <section className="user_profile">
        <Row className="border rounded py-3 ps-2">
          <Col sm={2} className="profile_avatar">
            <img src={profileData.avatar_url} alt="user avatar" />{" "}
          </Col>
          <Col sm={10} className="pt-2">
            <p>Username: {profileData.username}</p>
            <p>Name: {profileData.name}</p>
            <p>Email: something@somewhere.com</p>
          </Col>
        </Row>
      </section>
    );
}

export default UserProfile;