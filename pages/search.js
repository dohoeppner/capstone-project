import Layout from "../components/layout";
import Navbar from "../components/Navbar";

export default function Search() {
  return (
    <Layout>
      <main>
        <h1>Here you can search through your words!</h1>
      </main>
      <Navbar active="search" />
    </Layout>
  );
}
