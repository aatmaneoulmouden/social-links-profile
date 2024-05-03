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
      <div className="container w-full h-screen flex-center">
        <section className="cart bg-dark-grey max-w-[400px] w-full rounded-xl p-8 text-center">
          <div className="img-container w-20 h-20 rounded-full overflow-hidden mx-auto mb-6">
            <img src="./images/avatar-jessica.jpeg" alt="Jessica" />
          </div>
          <div className="user-info mb-5">
            <h1 className="name text-3xl font-bold mb-1">Jessica Randall</h1>
            <p className="location text-lg font-medium text-green mb-5">
              London, United Kingdom
            </p>
            <p className="title text-sm">
              "Front-end developer and avid reader."
            </p>
          </div>
          <UnorderedList items={socialLinks} />
        </section>
      </div>
    </main>
  );
}
