import PropTypes from 'prop-types';
import { makeStyles } from '@fluentui/react-components';
import {
  getHighBudget,
  getLowBudget,
  getModerateBudget,
} from '../utils';
import { BudgetItem } from './budget-item';

const useStyles = makeStyles({
  list: {
    listStyleType: 'none',
    marginBottom: 0,
    marginTop: 0,
    paddingLeft: 0,
  },
});

export const Budgets = ({ party }) => {
  const styles = useStyles();

  return (
    <div>
      <ul className={styles.list}>
        <BudgetItem label="Low" value={getLowBudget(party)} />
        <BudgetItem label="Moderate" value={getModerateBudget(party)} />
        <BudgetItem label="High" value={getHighBudget(party)} />
      </ul>
    </div>
  );
};

Budgets.propTypes = {
  party: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  })).isRequired,
};
