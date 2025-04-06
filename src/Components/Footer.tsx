import { Footer, FooterCopyright } from "flowbite-react";
import './Footer.scss'
function FooterComponent() {
  return (
    <Footer container className="rounded-none content-center footer">
      <FooterCopyright href="#" by="By Desing - La Casa Marquez" year={2025} className="text-center"/>
      {/* <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup> */}
    </Footer>
  );
}
export default FooterComponent;
