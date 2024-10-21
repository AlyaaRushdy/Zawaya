function ContactInfo({ fa_tag, heading, href, link_text }) {
  return (
    <>
      <div className="mb-4 d-flex align-items-center gap-3 contact-info">
        <i
          className={`${fa_tag} flex-shrink-0 rounded-circle bg-primary p-3 text-white`}
        ></i>
        <div>
          <h4 className="mb-1">{heading}</h4>
          <a
            href={href}
            className="link-dark link-underline-opacity-0 link-underline-opacity-100-hover"
          >
            {link_text}
          </a>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
