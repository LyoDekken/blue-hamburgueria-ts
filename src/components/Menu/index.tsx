import * as Styled from "./styles"
import logo from "../../assets/logo_patterns/logo.png";
import { HomeIcon, SettingsIcon, LogoutIcon } from "../../assets/icons";

export default function Menu(){
  return (
    <Styled.MenuHome>
      <img src={logo} alt="logo" />
      <div>
        <HomeIcon />
        <SettingsIcon />
      </div>
      <LogoutIcon />
    </Styled.MenuHome>
  );
}
