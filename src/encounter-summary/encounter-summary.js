import PropTypes from 'prop-types';
import { makeStyles } from '@fluentui/react-components';
import { Budgets } from './budgets';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '688px',
  },
});

export const EncounterSummary = ({ party }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <h1>Encounter Summary</h1>
      <div>
        <Budgets party={party} />
      </div>
    </div>
  );
};

EncounterSummary.propTypes = {
  party: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  })).isRequired,
};
