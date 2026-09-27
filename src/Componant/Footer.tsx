
import logo3 from "../assets/logo-text.png"

const Footer = () => {
    return (
       <footer className="footer sm:footer-horizontal bg-base-200 pt-30 pb-20 cointainer mx-auto px-12">
  <aside>
   <img src={logo3} alt="" />
  <div className='pt-6 pb-6'>
      <p>
     
      Curated tools, technologies,and resourscs for delelopers building
    </p>
    <p>mordern software</p>
  </div>
    <div className='flex gap-4 font-bold'>
        <p>GitHub</p>
        <p>Twitter</p>
        <p>LinkedIn</p>
    </div>
  </aside>
  <nav className='text-black'>
    <h6 className="footer-title font-bold">Product</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Technologies</a>
    <a className="link link-hover">Product</a>

  </nav>
  <nav className='text-black'>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Careers</a>

  </nav>
  <nav >
    <h6 className="footer-title text-black">Legal</h6>
    
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Terms of Servics</a>

  </nav>
</footer>
    );
};

export default Footer;