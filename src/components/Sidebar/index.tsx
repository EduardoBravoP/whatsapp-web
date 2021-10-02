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
import * as EmailValidator from "email-validator";

export function Sidebar() {
  const createChat = () => {
    const input = prompt(
      "Por favor, escreva o endereço de email da pessoa que você quer conversar"
    );

    if (!input) return;

    if (EmailValidator.validate(input)) {
    }
  };

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

      <SidebarButton onClick={createChat}>
        Começar uma nova conversa
      </SidebarButton>
    </Container>
  );
}
