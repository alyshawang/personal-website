import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <div className="m-horizontal">
        <Component {...pageProps} />
      </div>
    </>
  );
}
