import { useNavigate } from "react-router-dom";
import CartMenu from "../../components/CartMenu";
import { HeaderContainer, Title } from "./styles";


export default function Header() {
  const navigate = useNavigate();

  return <HeaderContainer>
    <Title onClick={() => navigate('/')}>WeMovies</Title>
    <CartMenu />
  </HeaderContainer>
}