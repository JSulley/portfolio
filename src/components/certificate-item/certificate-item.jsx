export default function CertificateItem({ certificate }) {
  const { name, skillsLearned, dateReceived, description, hyperlink } = certificate;
  
  return (
    <div className="even:mr-4 odd:ml-4 border-2 border-gray-950 rounded-xl mx-4pl-2 p-2">
      <h3 className="text-xl mb-2">{name}</h3>
      {skillsLearned.map(skill => <div key={skill.id} className="border-2 border-[#9ecaff]/10 bg-[#9ecaff]/40 text-[#9ecaff] rounded-xl mx-1 p-1 inline-block sm:max-lg:my-1">{skill.skill}</div>)}
      <p className="mt-2">{dateReceived}</p>
      <p>{description}</p>
      <a href={hyperlink} target="_blank">View Certificate</a>
    </div>
  );
};