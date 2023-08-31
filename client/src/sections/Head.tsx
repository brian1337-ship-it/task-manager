import { Button } from "../components";

const Head = () => {
  return (
    <section className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Task Manager</h2>

        <Button label="Create Task" />
      </div>
    </section>
  );
};

export default Head;
