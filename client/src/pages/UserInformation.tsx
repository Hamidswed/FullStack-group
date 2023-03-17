import UserBio from "../components/users/userInformation/UserInformation";
import UserProfile from "../components/users/userInformation/UserProfile";

const UserInformation = () => {
  return (
    <div className="user-info-page">
      <h3>My Account's Information</h3>
      <UserProfile />
      {/* <UserBio /> */}
    </div>
  );
};

export default UserInformation;
