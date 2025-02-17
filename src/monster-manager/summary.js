import PropTypes from 'prop-types';
import {
  makeStyles,
} from '@fluentui/react-components';
import {
  getEncounterXP,
} from '../utils';

const useStyles = makeStyles({
  root: {
    columnGap: '10px',
    display: 'flex',
    fontWeight: 700,
    rowGap: '10px',
  },
});

export const Summary = ({ monsters, party }) => {
  const styles = useStyles();
  const difficultyRating = `Difficulty: ${party.length}`;
  const totalXP = `Total XP: ${getEncounterXP(monsters)}`;

  return (
    <div className={styles.root}>
      <span>{difficultyRating}</span>
      |
      <span>{totalXP}</span>
    </div>
  );
};

Summary.propTypes = {
  monsters: PropTypes.arrayOf(PropTypes.shape({
    cr: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  party: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  })).isRequired,
};
