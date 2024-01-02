import logoimg from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={logoimg} alt="Quiz Logo" />
      <h1>Quiz app</h1>
    </header>
  );
}
