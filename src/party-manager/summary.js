import PropTypes from 'prop-types';
import {
  makeStyles,
} from '@fluentui/react-components';
import { getAveragePartyLevel } from '../utils';

const useStyles = makeStyles({
  root: {
    columnGap: '10px',
    display: 'flex',
    fontWeight: 700,
    rowGap: '10px',
  },
});

export const Summary = ({ party }) => {
  const styles = useStyles();
  const partySize = `Party Size: ${party.length}`;
  const averagePartyLevel = `Average Party Level: ${getAveragePartyLevel(party)}`;

  return (
    <div className={styles.root}>
      <span>{partySize}</span>
      |
      <span>{averagePartyLevel}</span>
    </div>
  );
};

Summary.propTypes = {
  party: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  })).isRequired,
};
