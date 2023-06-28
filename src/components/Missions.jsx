import { useSelector } from 'react-redux';
import MissionDetails from './MissionDetails';
import Styles from '../styles/Mission.module.css';

const Missions = () => {
  const { missions } = useSelector((store) => store.missions);

  return (
    <table className={Styles.missionTable}>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <MissionDetails
            key={mission.mission_id}
            name={mission.mission_name}
            description={mission.description}
            id={mission.mission_id}
            reserved={mission.reserved}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
