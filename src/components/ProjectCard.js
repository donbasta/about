import '../styles/projectCard.css';

const ProjectCard = ({title, stack, desc, url}) => {
  return (
    <div className="project-card">
      <div className="title">{title}</div>
      <div className="icon"></div>
      <div className="features">
        <ul>
          {stack.map(elem => {
            return <li>{elem}</li>
          })}
        </ul>
      </div>
      <a className="btn" href={url}>Browse Repository</a>
    </div>
  )
}

export default ProjectCard;