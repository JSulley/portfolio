export default function CertificateItem({ certificate }) {
    const { name, skillsLearned, dateReceived, description, hyperlink } = certificate
    return (
      <div>
        <h3>{name}</h3>
        <p>{skillsLearned}</p>
        <h4>{dateReceived}</h4>
        <p>{description}</p>
        <a href={hyperlink} target="_blank">View Certificate</a>
      </div>
    );
};