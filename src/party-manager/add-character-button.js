import PropTypes from 'prop-types';
import { Button } from '@fluentui/react-components';
import { Add16Filled } from '@fluentui/react-icons';
import { noop } from '../utils';

export const AddCharacterButton = ({ onClick = noop }) => {
  return (
    <Button
      icon={<Add16Filled />}
      onClick={onClick}
    >
      Add Character
    </Button>
  );
};

AddCharacterButton.propTypes = {
  onClick: PropTypes.func,
};
