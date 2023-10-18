const sections = [
  {
    'title': 'About Me',
    'content': 'Est dolore mollit elit proident non elit ut aliquip duis cillum esse. Aliqua reprehenderit consequat in proident ad ut eiusmod dolor nostrud exercitation amet exercitation. Anim anim laborum aliqua ad amet laboris laborum magna.',
  },
  {
    'title': 'Projects',
    'content': 'Elit veniam magna id mollit eu aliqua ex velit laboris.'
  },
  {
    'title': 'Certifications',
    'content': "Ipsum laboris proident nulla duis velit nostrud reprehenderit tempor adipisicing irure non."
  },
]

export default function Home() {
  return (
    <main>
      <h1>James Sullivan</h1>
      <h2>Aspiring Data Scientist/Software Engineer</h2>
      <nav>
        <ul>
          {sections.map(section => (
            <div>
              <li>{section.title}</li>
              <p>{section.content}</p>
            </div>
          ))}
        </ul>
      </nav>
    </main>
  )
}
