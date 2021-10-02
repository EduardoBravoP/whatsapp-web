import {
  Container,
  Header,
  IconsContainer,
  Search,
  SearchInput,
  SidebarButton,
  UserAvatar,
} from "./styles";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/morevert";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";

export function Sidebar() {
  return (
    <Container>
      <Header>
        <UserAvatar />

        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>

      <Search>
        <SearchIcon />
        <SearchInput placeholder="Pesquisar conversas" />
      </Search>

      <SidebarButton>Começar uma nova conversa</SidebarButton>
    </Container>
  );
}
