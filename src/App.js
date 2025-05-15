import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const members = [
    { name: 'Rajesh Patil', role: 'President', area: 'Mumbai' },
    { name: 'Sneha Kulkarni', role: 'Secretary', area: 'Pune' },
    { name: 'Vijay Deshmukh', role: 'Treasurer', area: 'Mumbai' },
    { name: 'Anjali Shinde', role: 'Member', area: 'Nashik' },
    { name: 'Ravi Kamat', role: 'Member', area: 'Pune' }
  ];

  const filteredMembers = members.filter(member =>
    member.area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">🦁 Lion Club</div>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">☰</label>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#members">Members</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HOME SECTION */}
      <header className="hero-section" id="home">
        <div className="hero-content">
          <h1>Welcome to Lion Club</h1>
          <p className="slogan">"We Serve with Heart"</p>
          <p className="slogan">"Unity. Leadership. Service."</p>
          <button className="join-btn">Join Us Now</button>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section className="about-section" id="about">
        <h2>About Us</h2>
        <p>
          Lion Club is a trusted non-profit organization committed to serving the community through
          various social and humanitarian efforts.
        </p>
        <h3>Our Mission</h3>
        <p>
          To empower communities by fostering leadership, encouraging service, and promoting unity.
        </p>
        <h3>Our Vision</h3>
        <p>
          A world where every individual has the opportunity to contribute positively to society.
        </p>
        <h3>Our Activities</h3>
        <ul>
          <li>Community health camps</li>
          <li>Educational support for underprivileged children</li>
          <li>Environmental conservation drives</li>
          <li>Fundraising events for disaster relief</li>
        </ul>
      </section>

      {/* MEMBERS SECTION */}
      <section className="members-section" id="members">
        <h2>Our Members</h2>
        <p>We have a dedicated team working across various cities to make a difference.</p>
        <input
          type="text"
          placeholder="Search by area (e.g. Mumbai)"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {searchTerm ? (
          <ul className="member-list">
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member, index) => (
                <li key={index}>
                  <strong>{member.name}</strong> — {member.role} ({member.area})
                </li>
              ))
            ) : (
              <li>No members found for this area.</li>
            )}
          </ul>
        ) : (
          <p className="search-note">Please enter an area name to search for members.</p>
        )}
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@lionclub.org</p>
        <p>Phone: +91-9876543210</p>
        <p>Address: 123 Community Road, Mumbai, Maharashtra, India</p>
        <h3>Follow Us</h3>
        <p>
          <a href="https://facebook.com/lionclub" target="_blank" rel="noreferrer">Facebook</a> |{' '}
          <a href="https://twitter.com/lionclub" target="_blank" rel="noreferrer">Twitter</a> |{' '}
          <a href="https://instagram.com/lionclub" target="_blank" rel="noreferrer">Instagram</a>
        </p>
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <p>Email: contact@lionclub.org</p>
        <p>Phone: +91-9876543210</p>


      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>&copy; 2025 Lion Club. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
