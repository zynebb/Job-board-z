import "./App.css";
import Title from "./component/Title";
import Job from "./component/Job";

function App() {
  return (
    <div>
      <div className="header">
        <Title />
      </div>
      <ul className="body">
        <li className="square">
          <Job
            color="red"
            title="Full Time Sales Associate - Sydney Boutique"
            contractType="CDI -"
            country="Australie -"
            city="Sydney"
          />
        </li>
        <li className="square">
          <Job
            color="green"
            title="Agent de Sécurité - Pantin"
            contractType="CDI -"
            country="France -"
            city="Pantin"
          />
        </li>
        <li className="square">
          <Job
            color="yellow"
            title=" Responsable d'Atelier (H/F)"
            contractType="CDD -"
            country="France -"
            city="Paris"
          />
        </li>
        <li className="square">
          <Job
            color="blue"
            title="Chef de Projets"
            contractType="CDD -"
            country="France -"
            city="Paris"
          />
        </li>

        <li className="square">
          <Job
            color="orange"
            title="Développeur React.js"
            contractType="CDI -"
            country="France -"
            city="Paris"
          />
        </li>

        <li className="square">
          <Job
            color="red"
            title="Sales Associate Stockholm"
            contractType="CDI -"
            country="Suède -"
            city="Stockholm"
          />
        </li>
        <li className="square">
          <Job
            color="green"
            title="Vendeur/se - Crans Montana"
            contractType="CDI -"
            country="Suisse -"
            city="Crans-Montana"
          />
        </li>

        <li className="square">
          <Job
            color="yellow"
            title="CRM & Data Quality Analyst"
            contractType="CDI -"
            country="USA -"
            city="New York"
          />
        </li>
        <li className="square">
          <Job
            color="blue"
            title="Infirmier (H/F)"
            contractType="CDI -"
            country="France -"
            city="Pantin"
          />
        </li>
      </ul>
      <div className="footer">Made with React at Le Reacteur By Nono</div>
    </div>
  );
}

export default App;
