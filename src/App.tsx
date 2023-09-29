import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { HeaderMegaMenu } from "./components/HeaderMegaMenu/HeaderMegaMenu";
import { NavbarMinimal } from "./components/NavBar/NavbarMinimal/NavbarMinimal";
import { FooterLinks } from "./components/FooterLinks/FooterLinks";

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <HeaderMegaMenu />
      <NavbarMinimal />
      <FooterLinks />
    </MantineProvider>
  );
}
