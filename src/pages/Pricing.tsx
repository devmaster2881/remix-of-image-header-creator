import Header from "@/components/Header";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8">Pricing Plans</h2>
        <p className="text-lg text-muted-foreground">Choose the perfect plan for your needs.</p>
      </main>
    </div>
  );
};

export default Pricing;
