import CertificateItem from "../certificate-item/certificate-item";

export default function Certificates({ certificates }) {
  return (
    <div>
      <h2>Certificates</h2>
      {certificates.map(certificate => <CertificateItem key={certificate.id} certificate={certificate} />)}
    </div>
  );
}
