import { Tasks } from "./sections";
import { Head } from "./sections";

const App = () => {
  return (
    <main className="relative">
      <section className="padding">
        <Head />
      </section>
      <section className="padding-x py-10">
        <Tasks />
      </section>
    </main>
  );
};

export default App;
