import Card from "../../Components/Card/Card";
import MyImage from "../../assets/img-one.png";
import kid from "../../assets/img-two.png";
import girl from "../../assets/kid-3.png";
import boy from "../../assets/kid-7.png";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <h2 id="hit">Profile card page</h2>
      <div className="pod">
      <Card text="This is Babajide Bankole" image={MyImage} age="8 Years old" location="Lagos island" color="red" />
      <Card text="This is Anini Abigirl" image={kid} age="7 Years old" location="Shomolu" color="blue" />
      <Card text="This is Olabisi Rafael" image={girl} age="6 Years old" location="Bariga" />
      <Card text="This is Johnson Noal" image={boy} age="10 Years old" location="Ikorodu" />
    </div>
    </div>
  );
};

export default Profile;
