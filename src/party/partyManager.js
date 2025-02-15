import PropTypes from 'prop-types';
import {
  makeStyles,
} from '@fluentui/react-components';
import { CharacterCard } from './characterCard';
import { noop } from '../utils';

const useStyles = makeStyles({
  container: {
    display: 'flex',
  },
});

export const PartyManager = ({
  onRemoveCharacter = noop,
  onSelectCharacterLevel = noop,
  party,
}) => {
  const title = 'Party Manager';
  const styles = useStyles();

  return (
    <div className="PartyManager">
      <h1>{title}</h1>
      <div className={styles.container}>
        {party.map(({ id, level }) => (
          <CharacterCard
            id={id}
            key={id}
            level={level}
            onRemove={onRemoveCharacter}
            onSelectLevel={onSelectCharacterLevel}
          />
        ))}
      </div>
    </div>
  );
};

PartyManager.propTypes = {
  onRemoveCharacter: PropTypes.func,
  onSelectCharacterLevel: PropTypes.func,
  party: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  })).isRequired,
};
