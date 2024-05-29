// index.styled.jsx
import styled from "styled-components";
import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  ListItemButton as MuiListItemButton,
} from "@mui/material";

export const Accordion = styled(MuiAccordion)`
  background-color: transparent;
  color: black;
  width: fit-content;
  box-shadow: none !important;
  border-radius: 12px;
`;

export const AccordionSummary = styled(MuiAccordionSummary)`
  transition: all 0.3s ease-in-out;
  align-items: center;
  padding: 0 1rem;
  &:hover {
    background-color: transparent !important;
  }
  &.Mui-expanded {
    background-color: var(--orange-200) !important;
  }
`;

export const AccordionDetails = styled(MuiAccordionDetails)`
  padding: 0;
  white-space: nowrap;
  margin-top: 30px !important;
`;

export const ListItemButton = styled(MuiListItemButton)`
  &.MuiListItemButton-root {
    padding: 0 1rem;
    width: 100% !important;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    color: var(--stone-600);
    background-color: var(--orange-200);
    border-radius: 12px;
    /* padding-left: 1.4rem; */
    /* border-left: 4px solid var(--red-600); */
  }
`;

export const StyledAccordionSummaryWithBorders = styled(MuiAccordionSummary)`
  transition: all 0.3s ease-in-out;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid var(--stone-300) !important;
  &:hover {
    background-color: transparent !important;
  }
  &.Mui-expanded {
    background-color: var(--orange-200) !important;
  }
`;

export const IconContainer = styled.div`
  width: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
