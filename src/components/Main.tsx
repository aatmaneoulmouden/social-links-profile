import UnorderedList from "./UnorderedList";

export default function Main() {
  const socialLinks = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];
  return (
    <main>
      <section className="cart">
        <div className="img-container">
          <img src="./images/avatar-jessica.jpeg" alt="Jessica" />
        </div>
        <div className="user-info">
          <h1 className="name">Jessica Randall</h1>
          <p className="location">London, United Kingdom</p>
          <p className="title">"Front-end developer and avid reader."</p>
        </div>
        <UnorderedList items={socialLinks} />
      </section>
    </main>
  );
}
