import PropTypes from 'prop-types';
import { Button } from '@fluentui/react-components';
import { Add16Filled } from '@fluentui/react-icons';
import { noop } from '../utils';

export const AddMonsterButton = ({ onClick = noop }) => {
  return (
    <Button
      icon={<Add16Filled />}
      onClick={onClick}
    >
      Add Monster
    </Button>
  );
};

AddMonsterButton.propTypes = {
  onClick: PropTypes.func,
};
