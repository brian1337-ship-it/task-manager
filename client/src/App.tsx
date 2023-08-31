import { TaskList } from "./sections";
import { Head } from "./sections";

const App = () => {
  return (
    <main className="relative">
      <section className="padding">
        <Head />
      </section>
      <section className="padding-x py-10">
        <TaskList />
      </section>
    </main>
  );
};

export default App;
