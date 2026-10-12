import { certificates } from "../../../mock/certificates";
import { Title } from "../../Titles";
import { StyledCertificate } from "./style";

export const Certificates = () => {
  return (
    <section
      id="certificates"
      className="effectScrollMonitoring"
    >
      <StyledCertificate>
        <Title text={"Certificados"} />
        <div>
          {certificates.map((certificate) => (
            <img key={certificate.image} src={certificate.image} alt={certificate.alt} loading="lazy" />
          ))}
        </div>
      </StyledCertificate>
    </section>
  );
};
