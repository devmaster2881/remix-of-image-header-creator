import Header from "@/components/Header";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>
        <p className="text-lg text-muted-foreground">Discover what we can do for you.</p>
      </main>
    </div>
  );
};

export default Services;
