import PropTypes from 'prop-types';
import { makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  label: {
    marginRight: '4px',
    textTransform: 'uppercase',
  },
  root: {
    display: 'flex',
    fontWeight: 700,
    justifyContent: 'flex-end',
  },
});

export const BudgetItem = ({ label, value = '' }) => {
  const styles = useStyles();
  const labelString = `${label}:`;
  const valueString = `${value} XP`;

  return (
    <li className={styles.root}>
      <span className={styles.label}>{labelString}</span>
      <span>{valueString}</span>
    </li>
  );
};

BudgetItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};
