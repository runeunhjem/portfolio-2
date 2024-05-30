import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { ExpandMore } from "@mui/icons-material";
import { List, ListItemText, Typography } from "@mui/material";
import {
  mainLinks,
  firstYearLinks,
  secondYearLinks,
  otherProjectsLinks,
  portfolioLink,
} from "./links";
import * as S from "./index.styled";

const HamburgerAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const accordionRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = (url, isInternal) => {
    setExpanded(false);
    if (isInternal) {
      navigate(url);
    } else {
      window.open(url, "_blank");
    }
  };

  const handleOutsideClick = (event) => {
    if (accordionRef.current && !accordionRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <S.Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      ref={accordionRef}
    >

      <S.AccordionSummary
        expandIcon={
          <S.IconContainer className="hover-links !mx-3 xs:!mx-1 !cursor-pointer">
            <MenuIcon
              className="mx-1 !text-4xl xs:!text-2xl"
              sx={{ color: "var(--stone-600)"}}
            />
          </S.IconContainer>
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={ {
          "&.MuiAccordionSummary-root": {
            height: "30px !important",
          },
        }}
        >
        <Typography
          className="xs:block hidden"
          sx={{
            cursor: "default",
            width: "100%",
            marginRight: "0.6rem",
            textAlign: "right",
            "&:hover": {
              borderBottom: "1px solid transparent",
            },
          }}
        >
          Menu
        </Typography>
      </S.AccordionSummary>
      <S.AccordionDetails
        sx={{
          marginTop: "30px !important",
          width: "260px",
          maxHeight: "100vh",
          overflowY: "auto",
        }}
      >
        <List
          className="hamburger-accordion"
          style={{
            border: "1px solid var(--stone-300)",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
            backgroundColor: "var(--orange-100)",
            borderRadius: "12px",
          }}
        >
          {mainLinks.map((link) => (
            <S.ListItemButton
              key={link.text}
              onClick={() => handleClick(link.url, true)}
            >
              <ListItemText primary={link.text} />
            </S.ListItemButton>
          ))}
          <S.Accordion>
            <S.SubmenuAccordionSummary
              expandIcon={<ExpandMore sx={{ color: "var(--stone-600)" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                className="whitespace-nowrap pe-2 ps-4"
                sx={{ color: "var(--stone-600)" }}
              >
                School Projects
              </Typography>
            </S.SubmenuAccordionSummary>
            <S.AccordionDetails
              sx={{
                "&.MuiAccordionDetails-root": {
                  paddingTop: "0",
                  whiteSpace: "nowrap",
                },
              }}
            >
              <S.Accordion>
                <S.SubmenuAccordionSummary
                  expandIcon={<ExpandMore sx={{ color: "var(--stone-600)" }} />}
                  aria-controls="panel2c-content"
                  id="panel2c-header"
                >
                  <Typography
                    className="whitespace-nowrap pe-2 ps-4"
                    sx={{ color: "var(--stone-600)" }}
                  >
                    Second Year
                  </Typography>
                </S.SubmenuAccordionSummary>
                <S.AccordionDetails>
                  <List>
                    {secondYearLinks.reverse().map((link) => (
                      <S.ListItemButton
                        key={link.text}
                        onClick={() => handleClick(link.url, false)}
                      >
                        <ListItemText primary={link.text} />
                      </S.ListItemButton>
                    ))}
                  </List>
                </S.AccordionDetails>
              </S.Accordion>
              <S.Accordion>
                <S.SubmenuAccordionSummary
                  expandIcon={<ExpandMore sx={{ color: "var(--stone-600)" }} />}
                  aria-controls="panel2b-content"
                  id="panel2b-header"
                >
                  <Typography
                    className="whitespace-nowrap pe-2 ps-4"
                    sx={{ color: "var(--stone-600)" }}
                  >
                    First Year
                  </Typography>
                </S.SubmenuAccordionSummary>
                <S.AccordionDetails>
                  <List>
                    {firstYearLinks.reverse().map((link) => (
                      <S.ListItemButton
                        className="w-full"
                        key={link.text}
                        onClick={() => handleClick(link.url, false)}
                      >
                        <ListItemText primary={link.text} />
                      </S.ListItemButton>
                    ))}
                  </List>
                </S.AccordionDetails>
              </S.Accordion>
            </S.AccordionDetails>
          </S.Accordion>
          <S.Accordion>
            <S.StyledAccordionSummaryWithBorders
              expandIcon={
                <ExpandMore
                  sx={{ color: "var(--stone-600)", width: "100% !important" }}
                />
              }
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography
                className="whitespace-nowrap pe-2 ps-4"
                sx={{ color: "var(--stone-600)" }}
              >
                Other Projects
              </Typography>
            </S.StyledAccordionSummaryWithBorders>
            <S.AccordionDetails>
              <List>
                {otherProjectsLinks.map((link) => (
                  <S.ListItemButton
                    key={link.text}
                    onClick={() => handleClick(link.url, false)}
                  >
                    <ListItemText primary={link.text} />
                  </S.ListItemButton>
                ))}
              </List>
            </S.AccordionDetails>
          </S.Accordion>
          <S.ListItemButton
            onClick={() => handleClick(portfolioLink.url, false)}
          >
            <ListItemText
              className="whitespace-nowrap !ps-1"
              primary={portfolioLink.text}
              sx={{ color: "var(--stone-600)" }}
            />
          </S.ListItemButton>
        </List>
      </S.AccordionDetails>
    </S.Accordion>
  );
};

export default HamburgerAccordion;
