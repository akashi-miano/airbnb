const Greatest = () => {
  return (
    <section className="py-16 ">
      <div className="container">
        <div
          className="wrapper min-h-[75vh] rounded-xl flex items-center bg-center bg-cover bg-no-repeat relative overflow-hidden"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1674635191027-3d9a5520790f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <header className="flex flex-col text-white relative z-[2] px-8 flow-content--m">
            <h2 className="text-5xl capitalize ">
              the greatest <br />
              outdoors
            </h2>
            <span className="text-lg">Wishlists created by Airbnb</span>
            <a
              href=""
              className="bg-black text-white rounded-md px-8 py-2 hover:bg-white  focus:bg-white  hover:text-black focus:text-black duration-300 w-fit"
            >
              Get Inspired
            </a>
          </header>
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
        </div>
      </div>
    </section>
  );
};

export default Greatest;
