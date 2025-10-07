import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center text-primary font-serif">Welcome to Esquire Solicitors</h1>
        <p className="text-center text-muted-foreground mt-4">Your trusted legal partner.</p>
      </main>
    </div>
  );
}

export default App;

export default App
