import { certificateImages } from "../../../mock/certificates";
import { Title } from "../../Titles";
import { StyledCertificate } from "./style";

export const Certificates = () => {
  return (
    <div
      style={{ marginTop: "100px" }}
      id="certificates"
      className="effectScrollMonitoring"
    >
      <StyledCertificate>
        <Title text={"Certificados"} />
        <div>
          {certificateImages.map((image) => (
            <img src={image} alt="imagem" />
          ))}
        </div>
      </StyledCertificate>
    </div>
  );
};
