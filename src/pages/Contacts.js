const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>India, Rajasthan</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p><a href="tel:+91 8696366996">+91 8696366996</a></p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p><a href="mailto:ssaini.086963@gmail.com">ssaini.086963@gmail.com</a></p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Contacts;