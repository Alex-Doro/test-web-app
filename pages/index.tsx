import NewProject from "@/components/partials/NewProject/NewProject";
import Steps from "@/components/partials/Steps/Steps";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Test-web-app</title>
      </Head>
      <NewProject></NewProject>
    </>
  );
};

export default HomePage;
