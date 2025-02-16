import PropTypes from 'prop-types';
import {
  makeStyles,
} from '@fluentui/react-components';
import {
  noop,
} from '../utils';
import { AddCharacterButton } from './addCharacterButton';
import { CharacterCard } from './characterCard';
import { PartySummary } from './summary';

const useStyles = makeStyles({
  container: {
    display: 'flex',
  },
  header: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export const PartyManager = ({
  onAddCharacter = noop,
  onRemoveCharacter = noop,
  onSelectCharacterLevel = noop,
  party,
}) => {
  const title = 'Party Manager';
  const styles = useStyles();

  return (
    <div className="PartyManager">
      <h1>{title}</h1>
      <div className={styles.header}>
        <PartySummary party={party} />
        <AddCharacterButton onClick={onAddCharacter} />
      </div>
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
  onAddCharacter: PropTypes.func,
  onRemoveCharacter: PropTypes.func,
  onSelectCharacterLevel: PropTypes.func,
  party: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  })).isRequired,
};
