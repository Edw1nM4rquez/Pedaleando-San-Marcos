import { Footer, FooterCopyright } from "flowbite-react";
import "./Footer.scss";
import casaMarquez from "./../assets/image/LA CASA MARQUEZ.jpg";
function FooterComponent() {
  return (
    <Footer container className="rounded-none content-center footer flex flex-col ">
      <FooterCopyright
        href="#"
        by="By Desing - La Casa Marquez"
        year={2025}
        className="text-center"
      />
      <div className="md:absolute lg:absolute right-0 mr-2 justify-items-center">
        <img src={casaMarquez} alt="" className="h-12" />
        {/* <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink> */}
      </div>
    </Footer>
  );
}
export default FooterComponent;
