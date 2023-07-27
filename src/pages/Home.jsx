import { PageContainer } from "../components/PageContainer";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai"
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./styles.css"

export default function Home() {
  const handleClick = (url) => {
    window.open(url)
  }
  return (
    <PageContainer>
      <Header />
      <div className="container">
        <div class="redes">
          <h4 >NOSSAS REDES SOCIAIS</h4>

          <div className="buttons">
          <button onClick={() => handleClick("https://www.instagram.com/mercadotica/")}>
            <AiFillInstagram />
            Instagram</button>
          <button onClick={() => handleClick("https://pt-br.facebook.com/mercadotica")}>
            <AiFillFacebook />
            Facebook</button>

          </div>
        </div>
      </div>
      <Footer />
    </PageContainer>
  );
}