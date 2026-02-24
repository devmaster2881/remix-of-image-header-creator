import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <p className="text-lg text-muted-foreground">Learn more about our company and mission.</p>
      </main>
    </div>
  );
};

export default About;
