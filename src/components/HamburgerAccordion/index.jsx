import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ExpandMore } from "@mui/icons-material";

const mainLinks = [
  { text: "Home", url: "index.html" },
  { text: "About", url: "about.html" },
  { text: "Contact", url: "contact.html" },
];

const firstYearLinks = [
  { text: "Visit Chef's Table", url: "https://ru-project-exam-1.netlify.app/" },
  { text: "Visit CMS", url: "https://csm-sp1.netlify.app/" },
  { text: "Visit Game Hub", url: "https://gamehub-wp-ca.netlify.app/" },
];

const secondYearLinks = [
  { text: "Visit Holidaze", url: "https://rundev-holidaze.netlify.app/home" },
  {
    text: "Visit CGG",
    url: "https://javascript-frameworks-ca-react.netlify.app/",
  },
  { text: "Visit DreamBids", url: "https://runeunhjem-sp2.netlify.app/" },
  { text: "Visit movieTALK", url: "https://js2-ca-js2-branch.netlify.app/" },
];

const otherProjectsLinks = [
  {
    text: "My album on Spotify",
    url: "https://open.spotify.com/artist/56ZSG2Q1JKydX5X9rTZxrq",
  },
  {
    text: "This is my TV",
    url: "https://programming-foundations-ca-runeunhjem.netlify.app/",
  },
  { text: "IMDB API search", url: "https://js1ca.netlify.app/" },
];

const portfolioLink = {
  text: "Portfolio README",
  url: "https://github.com/runeunhjem/portfolio1-ca/blob/main/README.md",
};

const linkStyles = {
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    color: "stone-600",
    backgroundColor: "#fed7aa",
    borderRadius: "12px",
    paddingLeft: "0.4rem",
  },
};

const accordionSummaryStyles = {
  transition: "all 0.3s ease-in-out",
  alignItems: "center",
  padding: "0 1rem",
  "&:hover": {
    backgroundColor: "transparent !important",
  },
};

const HamburgerAccordion = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Accordion
      sx={{
        backgroundColor: "transparent",
        color: "black",
        position: "absolute",
        top: "0px",
        right: "10px",
        width: "fit-content",
        zIndex: 1000,
        boxShadow: "none",
        borderRadius: "12px",
      }}
    >
      <AccordionSummary
        expandIcon={<MenuIcon className="w-full" sx={{ color: "black" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          ...accordionSummaryStyles,
          "&.Mui-expanded": {
            backgroundColor: "#fed7aa",
            
          },
        }}
      >
        <Typography
          className="xs:block hidden w-full"
          sx={{
            width: "100%",
            marginRight: "0.3rem",
            textAlign: "right",
          }}
        >
          Menu
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <List className="hamburger-accordion rounded-xl bg-orange-100">
          {mainLinks.map((link) => (
            <ListItemButton
              key={link.text}
              onClick={() => handleClick(link.url)}
              className="!py-0"
            >
              <ListItemText primary={link.text} sx={{ ...linkStyles }} />
            </ListItemButton>
          ))}
          <Accordion sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: "black" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={accordionSummaryStyles}
            >
              <Typography
                className="whitespace-nowrap pe-2 ps-4"
                sx={{ color: "stone-600" }}
              >
                School Projects
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <Accordion
                sx={{ backgroundColor: "transparent", boxShadow: "none" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: "black" }} />}
                  aria-controls="panel2c-content"
                  id="panel2c-header"
                  sx={accordionSummaryStyles}
                >
                  <Typography
                    className="whitespace-nowrap pe-2 ps-4"
                    sx={{ color: "stone-600" }}
                  >
                    Second Year
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0 }}>
                  <List>
                    {secondYearLinks.reverse().map((link) => (
                      <ListItemButton
                        key={link.text}
                        onClick={() => handleClick(link.url)}
                        className="!py-0"
                      >
                        <ListItemText
                          primary={link.text}
                          sx={{ ...linkStyles }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{ backgroundColor: "transparent", boxShadow: "none" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: "black" }} />}
                  aria-controls="panel2b-content"
                  id="panel2b-header"
                  sx={accordionSummaryStyles}
                >
                  <Typography
                    className="whitespace-nowrap pe-2 ps-4"
                    sx={{ color: "stone-600" }}
                  >
                    First Year
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0 }}>
                  <List>
                    {firstYearLinks.reverse().map((link) => (
                      <ListItemButton
                        key={link.text}
                        onClick={() => handleClick(link.url)}
                        className="!py-0"
                      >
                        <ListItemText
                          primary={link.text}
                          sx={{ ...linkStyles }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: "black" }} />}
              aria-controls="panel3a-content"
              id="panel3a-header"
              sx={accordionSummaryStyles}
            >
              <Typography
                className="whitespace-nowrap pe-2 ps-4"
                sx={{ color: "stone-600" }}
              >
                Other Projects
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <List>
                {otherProjectsLinks.map((link) => (
                  <ListItemButton
                    key={link.text}
                    onClick={() => handleClick(link.url)}
                    className="!py-0"
                  >
                    <ListItemText primary={link.text} sx={{ ...linkStyles }} />
                  </ListItemButton>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
          <ListItemButton onClick={() => handleClick(portfolioLink.url)}>
            <ListItemText
              className="whitespace-nowrap"
              primary={portfolioLink.text}
              sx={{ color: "stone-600" }}
            />
          </ListItemButton>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default HamburgerAccordion;
