const articles = [
  {
    author: "Andy glamer",
    avatar: "https://i.pravatar.cc/30?img=1",
    image: "https://images.unsplash.com/photo-1581091012184-5c0d8b4a3c1c?w=400&h=300&fit=crop",
    title: "How to evaluate the effective of training programs.",
    desc: "Lorem ipsum has been industry standard dummy text ever...",
  },
  {
    author: "Den williamson",
    avatar: "https://i.pravatar.cc/30?img=2",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=300&fit=crop",
    title: "Experience the breathtaking views and perspectives.",
    desc: "Lorem ipsum has been industry standard dummy text ever...",
  },
  {
    author: "Jones robbert",
    avatar: "https://i.pravatar.cc/30?img=3",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&h=300&fit=crop",
    title: "Build up healthy habits and strong peaceful life.",
    desc: "Lorem ipsum has been industry standard dummy text ever...",
  },
];

const LatestArticles = () => {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="max-w-[1236px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">Latest Articles</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <div key={i} className="bg-background rounded-xl shadow-md overflow-hidden max-w-[360px] w-full mx-auto">
              <div className="flex items-center gap-2 p-5">
                <img src={a.avatar} className="w-6 h-6 rounded-full" alt="" />
                <p className="text-base text-muted-foreground">
                  By <span className="text-foreground font-medium">{a.author}</span>
                </p>
              </div>
              <img src={a.image} className="w-full h-[259px] object-cover block" alt="" />
              <div className="p-10">
                <h3 className="text-[19px] font-semibold text-foreground mb-3">{a.title}</h3>
                <p className="text-base text-muted-foreground">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-[60px]">
          <button className="inline-flex items-center justify-between gap-2 rounded-full bg-foreground text-background px-6 py-2 pr-2 text-sm transition-colors hover:bg-foreground/90">
            <span>Get Started</span>
            <span className="bg-background text-foreground rounded-full w-9 h-9 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
