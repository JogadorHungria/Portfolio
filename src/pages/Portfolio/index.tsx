import { Main } from "../../componets/Main";
import { Footer } from "../../componets/Footer";

export function Portfolio() {
  return (
    <div
      style={{
        minHeight: "100vh",
        maxWidth: "100vw",
        background: "radial-gradient(ellipse at 78% 4%, rgba(91, 48, 143, 0.2), transparent 35%), #0a090e",
      }}
    >
      <Main />

      <Footer />
    </div>
  );
}
