import MyProjects from '../assets/data.json'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';


export default function Projects() {
  return (
    <section>

      <h2>Made by: {MyProjects.user}</h2>
      {
        MyProjects.projects.map(proj => {
          return (
            <Card style={{ width: '18rem' }}>
              <ListGroup variant="flush">

                <ListGroup.Item>
                  <article key={proj.name}>
                    <Card.Header>
                      <h3>Project name: {proj.name}</h3>
                      </Card.Header>
                    <p>{proj.description}</p>
                    <ProgressBar striped variant="success" animated now={proj.progress} />;
                  </article> 
                  </ListGroup.Item>
              </ListGroup>
            </Card>
          )
        })}
    </section>
  )
}