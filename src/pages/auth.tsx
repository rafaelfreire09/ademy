import HeadNext from "components/infra/HeadNext";
import Header from "components/layout/Header";
import AuthView from "components/views/SignIn";

export default function Auth() {
  return (
    <>
      <HeadNext />
      <Header />
      <AuthView />
    </>
  );
}
