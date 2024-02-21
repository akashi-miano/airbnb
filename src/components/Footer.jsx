const Footer = () => {
  const links = [
    {
      title: "ABOUT",
      links: [
        "How Airbnb Works",
        "Newsroom",
        "Investors",
        "Airbnb Plus",
        "Airbnb Luxe",
      ],
    },
    {
      title: "COMMUNITY",
      links: [
        "Accessibility",
        "This is not a real site",
        "Its pretty awesome clone",
        "Referrals accepted",
        "Papafam",
      ],
    },
    {
      title: "HOST",
      links: [
        "Papa React",
        "Presents",
        "Zero to full stack Here",
        "Hundreds of Students",
        "Join Now",
      ],
    },
    {
      title: "SUPPORT",
      links: [
        "Help Center",
        "Trust & Safety",
        "Say Hi Youtube",
        "Easter Eggs",
        "For the Win",
      ],
    },
  ];
  return (
    <footer className="py-16 bg-stone-300 text-black">
      <div className="container grid md:grid-cols-4">
        {links.map(({ title, links }, index) => (
          <div className="" key={title}>
            <header>
              <h2 className="font-bold text-xl">{title}</h2>
            </header>
            <nav>
              <ul className="flex flex-col">
                {links.map((link, idx) => (
                  <a
                    href=""
                    key={idx}
                    className="hover:text-blue-600 duration-300 focus:text-blue-600 w-fit"
                  >
                    {link}
                  </a>
                ))}
              </ul>
            </nav>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
