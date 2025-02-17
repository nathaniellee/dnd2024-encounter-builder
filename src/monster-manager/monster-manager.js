import PropTypes from 'prop-types';
import { makeStyles } from '@fluentui/react-components';
import { noop } from '../utils';
import { AddMonsterButton } from './add-monster-button';
import { Summary } from './summary';
import { MonsterCard } from './monster-card';

const useStyles = makeStyles({
  header: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '6px',
  },
  monsters: {
    columnGap: '12px',
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: '12px',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '688px',
  },
});

export const MonsterManager = ({
  onAddMonster = noop,
  onRemoveMonster = noop,
  onSelectCR = noop,
  monsters,
  party,
}) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <h1>Manage Monsters</h1>
      <div className={styles.header}>
        <Summary monsters={monsters} party={party} />
        <AddMonsterButton onClick={onAddMonster} />
      </div>
      <div className={styles.monsters}>
        {monsters.map(({ cr, id }) => (
          <MonsterCard
            cr={cr}
            id={id}
            key={id}
            onRemove={onRemoveMonster}
            onSelectCR={onSelectCR}
          />
        ))}
      </div>
    </div>
  );
};

MonsterManager.propTypes = {
  onAddMonster: PropTypes.func,
  onRemoveMonster: PropTypes.func,
  onSelectCR: PropTypes.func,
  monsters: PropTypes.arrayOf(PropTypes.shape({
    cr: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  party: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  })).isRequired,
};
