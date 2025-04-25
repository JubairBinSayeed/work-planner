import footerIcon from "../../assets/footer-icon.png"

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 font-[Kanit]">
  <aside>
    <p className="flex justofy-center text-center">Copyright © {new Date().getFullYear()} - All right reserved by Programmer101<img src={footerIcon} className="w-5 h-5" alt=""/></p>
  </aside>
        </footer>
    );
};

export default Footer;