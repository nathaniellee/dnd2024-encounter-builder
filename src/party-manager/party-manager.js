import PropTypes from 'prop-types';
import {
  makeStyles,
} from '@fluentui/react-components';
import {
  noop,
} from '../utils';
import { AddCharacterButton } from './add-character-button';
import { CharacterCard } from './character-card';
import { Summary } from './summary';

const useStyles = makeStyles({
  characters: {
    columnGap: '12px',
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: '12px',
  },
  header: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '6px',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '688px',
  },
});

export const PartyManager = ({
  onAddCharacter = noop,
  onRemoveCharacter = noop,
  onSelectCharacterLevel = noop,
  party,
}) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <h1>Manage Party</h1>
      <div className={styles.header}>
        <Summary party={party} />
        <AddCharacterButton onClick={onAddCharacter} />
      </div>
      <div className={styles.characters}>
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
