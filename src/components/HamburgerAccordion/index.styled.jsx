import styled from "styled-components";
import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  ListItemButton as MuiListItemButton,
} from "@mui/material";

export const Accordion = styled(MuiAccordion)`
  background-color: transparent;
  color: var(--stone-600);
  width: fit-content;
  box-shadow: none !important;
  border-radius: 12px;
  `;

export const AccordionSummary = styled(MuiAccordionSummary)`
  align-items: center;
  padding: 0 1rem;
  &:hover {
    background-color: transparent !important;
    cursor: default !important;
  }
  &.Mui-expanded {
    background-color: transparent !important;
  }
  `;

export const SubmenuAccordionSummary = styled(MuiAccordionSummary)`
  align-items: center;
  padding: 0 1rem;
  &:hover {
    background-color: transparent !important;
  }
  &.Mui-expanded {
    background-color: var(--orange-200) !important;
    border-bottom: 1px solid var(--stone-400) !important;
    cursor: default !important;
  }
`;

export const AccordionDetails = styled(MuiAccordionDetails)`
  padding: 0;
  white-space: nowrap;
  max-height: 70vh;
  overflow-y: auto;
`;

export const ListItemButton = styled(MuiListItemButton)`
  &.MuiListItemButton-root {
    padding: 0 1rem;
    width: 100% !important;
  }
  &:hover {
    color: var(--stone-600);
    background-color: var(--orange-200);
    border-radius: 12px;
  }
`;

export const StyledAccordionSummaryWithBorders = styled(MuiAccordionSummary)`
  align-items: center;
  padding: 0 1rem;
  width: 100% !important;
  border-bottom: 1px solid var(--stone-300) !important;
  &:hover {
    background-color: transparent !important;
  }
  &.Mui-expanded {
    background-color: var(--orange-200) !important;
    border-bottom: 1px solid var(--stone-400) !important;
    cursor: default !important;
  }
`;

export const IconContainer = styled.div`
  width: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
