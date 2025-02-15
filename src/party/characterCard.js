import PropTypes from 'prop-types';
import { useCallback } from 'react';
import {
  Button,
  Card,
  CardFooter,
  Dropdown,
  Option,
} from '@fluentui/react-components';
import { DismissFilled } from '@fluentui/react-icons';
import { CHARACTER_LEVELS } from '../constants';
import { noop } from '../utils';

export const CharacterCard = ({
  id,
  level = 1,
  onRemove = noop,
  onSelectLevel = noop,
}) => {
  const dropdownId = `CharacterCard-level-selector-${id}`;

  const onClickRemove = useCallback(() => {
    onRemove(id);
  }, [id, onRemove]);

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
      <CardFooter>
        <Button
          appearance="transparent"
          icon={<DismissFilled />}
          onClick={onClickRemove}
        />
      </CardFooter>
    </Card>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.string.isRequired,
  level: PropTypes.number,
  onRemove: PropTypes.func,
  onSelectLevel: PropTypes.func,
};
