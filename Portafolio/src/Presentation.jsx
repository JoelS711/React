import "./styles/presentation.css";

export function Presentation({ content }) {
  return (
    <section className="presentation">
      <div className="presentation__container">
        <h1 className="presentation__name">Emanuel Gelvez</h1>
        <h2 className="presentation__subtitle">{content.presentation.title}</h2>
        <p>{content.presentation.description}</p>
        <figure className="presentation__icons">
          <a
            href="https://www.youtube.com/@joels3356"
            target="_blank"
            className="presentation__icons--icon"
          >
            <img
              src="/SocialMedia/youtube.png"
              alt="YouTube Logo"
              className="presentation__icons--logo"
            />
          </a>
          <a
            href="mailto:joelsanabria11@gmail.com"
            target="_blank"
            className="presentation__icons--icon"
          >
            <img
              src="/SocialMedia/mail.png"
              alt="Mail Logo"
              className="presentation__icons--logo"
            />
          </a>
          <a
            href="https://github.com/JoelS711"
            target="_blank"
            className="presentation__icons--icon"
          >
            <img
              src="/SocialMedia/github.png"
              alt="Github Logo"
              className="presentation__icons--logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/emanuelgelvez/"
            target="_blank"
            className="presentation__icons--icon"
          >
            <img
              src="/SocialMedia/linkedln.png"
              alt="Linkedln Logo"
              className="presentation__icons--logo"
            />
          </a>
        </figure>
      </div>
      <figure>
        <img
          src="/profile.jpg"
          alt="Imagen de Perfil"
          className="presentation__image"
        />
      </figure>
    </section>
  );
}
