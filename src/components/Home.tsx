import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Grid } from "@mui/material";
import "../styling/Home.css";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  function routeToProjects() {
    navigate(`projects`);
  }

  return (
    <div className="welcome">
      <h1 id="title">Leung Ka Kin - Software Developer</h1>
      <hr />
      <h2 id="desc">
        Hi and welcome! I'm a final year student at Karel de Grote University
        College
      </h2>
      <div>
        <Grid
          container
          display="flex"
          flex-direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={0.8}>
            <LinkedInIcon
              id="linkedinIcon"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/ka-kin-leung-128821170/",
                  "_blank"
                );
              }}
            ></LinkedInIcon>
          </Grid>
          <Grid item xs={0.8}>
            <GitHubIcon
              id="githubIcon"
              onClick={() => {
                window.open("https://github.com/leungkakin", "_blank");
              }}
            ></GitHubIcon>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}
              color="common.black"
            >
              <Link
                id="linkToProjects"
                color="inherit"
                underline="none"
                onClick={routeToProjects}
              >
                Projects
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
