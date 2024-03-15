

const Footer = () => {
    return (
      <div className="w-full text-black  bg-gradient-to-b from-[#f2f2f2] to-[#b1aec5] md:h-[80px] flex justify-center items-center">
        <div className="md:grid grid-cols-2">
        {/* <div className="col-span-1 md:grid grid-cols-2  text-center pt-12">
          <div className="hidden md:block"></div>
          <div className="col-span-1">
            <h1 className="text-2xl font-medium">CONTACT US</h1>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div> */}
        {/* <div className="col-span-1 md:grid grid-cols-2 text-center pt-12">
          <div className="col-span-1 space-y-3">
            <p className="text-2xl font-medium">Follow US</p>
            <p>Join us on social media</p>
            <p className="flex justify-center items-center gap-2 text-4xl">
              <a href="https://www.Examplefacebook.com/profile.php?id=100027585"><FaFacebookSquare/></a>
              <a href="https://www.linkedin.com/in/example-0496452a4/"><FaLinkedin /></a>
              <a href="https://github.com/example556"><FaGithubSquare /></a>
              <a href="mailto:example@gmail.com" className="text-5xl"><MdEmail/></a>
            </p>
          </div>
          <div className="hidden md:block"></div>
        </div> */}
        <div className="col-span-2 text-center p-3 font-medium font-inter pt-4">
          <h1>Copyright © All rights reserved. by <span className="font-Signature font-extrabold text-xl">Baraqa Properties Limited LLC</span></h1>
        </div>
      </div>
      </div>
    );
  };
  
  export default Footer;
  