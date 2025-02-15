import PropTypes from 'prop-types';
import { useCallback } from 'react';
import {
  Card,
  Dropdown,
  Option,
} from '@fluentui/react-components';
import { CHARACTER_LEVELS } from '../constants';
import { noop } from '../utils';

export const CharacterCard = ({
  id,
  level = 1,
  onSelectLevel = noop,
}) => {
  const dropdownId = `CharacterCard-level-selector-${id}`;
  const onSelectOption = useCallback((event, data) => {
    onSelectLevel({
      id,
      selectedLevel: data.optionValue,
    });
  }, [id, onSelectLevel]);

  return (
    <Card orientation="horizontal" size="small">
      <label htmlFor={dropdownId}>Level</label>
      <Dropdown
        id={dropdownId}
        onOptionSelect={onSelectOption}
        selectedOptions={[level]}
        value={level}
      >
        {CHARACTER_LEVELS.map(selectableLevel => (
          <Option
            key={selectableLevel}
            text={selectableLevel}
            value={selectableLevel}
          >
            {selectableLevel}
          </Option>
        ))}
      </Dropdown>
    </Card>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.string.isRequired,
  level: PropTypes.number,
  onSelectLevel: PropTypes.func,
};
