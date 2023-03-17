import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { textAlign } from "@mui/system";

const AboutUs = () => {
  return (
    <>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={"https://avatars.githubusercontent.com/u/98917600?v=4"}
              alt={"Recipe Image"}
            />
          </CardActionArea>
        </Card>
        <Typography gutterBottom variant="h4" component="div">
          {"Hamid Reza Delshad"}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Current Status: {"Team Lead"}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ maxWidth: 345 }}
          style={{ textAlign: "justify" }}
        >
          {
            "My name is Hamidreza Delshad, a passionate junior full stack developer and a freelance graphic designer from Sweden./ My passion for software is coming up with concepts and turning them into beautiful interfaces. When I develop something, I pay close attention to the user experience, architecture, and code quality."
          }
          {
            "I'm learning new things about backend to become a full stack developer at Integrify Academy."
          }
        </Typography>
      </div>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={"https://avatars.githubusercontent.com/u/71669291?v=4"}
              alt={"Recipe Image"}
            />
          </CardActionArea>
        </Card>
        <Typography gutterBottom variant="h4" component="div">
          {"Hamid Reza Delshad"}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Current Status: {"Full Stack Developer"}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ maxWidth: 345 }}
          style={{ textAlign: "justify" }}
        >
          {
            "I am Alina, My dmain is Front-end development based in Stockholm. I'm learning new things about backend to become a full stack developer at Integrify Academy."
          }
        </Typography>
      </div>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={"https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-2/256/man-icon.png"}
              alt={"Recipe Image"}
            />
          </CardActionArea>
        </Card>
        <Typography gutterBottom variant="h4" component="div">
          {"Muhammad Irfan"}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Current Status: {"Full Stack Developer"}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ maxWidth: 345 }}
          style={{ textAlign: "justify" }}
        >
          {
            "My name is Muhammad Irfan, A passionate full stack developer from Sweden. I'm learning new things about backend to become a full stack developer at Integrify Academy."
          }
        </Typography>
      </div>
    </>
  );
};
export default AboutUs;