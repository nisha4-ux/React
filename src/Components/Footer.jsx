// Footer component
const Footer = () => {
  return (
    <div className="bg-gray-100 px-10 py-14">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">

        {/* Company */}
        <div>
          <h3 className="font-bold mb-3">Company</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Team</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-3">Contact</h3>
          <p>Help & Support</p>
          <p>Partner With Us</p>
        </div>

        {/* Available cities */}
        <div>
          <h3 className="font-bold mb-3">Available In</h3>
          <p>Bangalore</p>
          <p>Delhi</p>
          <p>Mumbai</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-bold mb-3">Social</h3>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>Twitter</p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
