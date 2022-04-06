import LanguageForm from "../components/LanguageForm";
import Layout from "../components/Layout";

export default function Language() {
  return (
    <Layout>
      <main>
        <LanguageForm
          onSubmit={(newLanguage) => {
            console.log(newLanguage);
          }}
        />
      </main>
    </Layout>
  );
}
