import styled from "styled-components";
import { Avatar, Button } from "@material-ui/core";

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

export const UserAvatar = styled(Avatar)`
  cursor: pointer;
  transition: opacity 0.2s;

  :hover {
    opacity: 0.8;
  }
`;

export const IconsContainer = styled.div``;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

export const SearchInput = styled.input`
  outline: 0;
  border: none;
  flex: 1;
`;

export const SidebarButton = styled(Button)`
  width: 100%;

  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;
