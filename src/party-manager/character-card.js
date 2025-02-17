import PropTypes from 'prop-types';
import { useCallback } from 'react';
import {
  Button,
  Card,
  CardFooter,
  Select,
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

  const onSelect = useCallback((event, { value }) => {
    onSelectLevel({
      id,
      selectedLevel: Number(value),
    });
  }, [id, onSelectLevel]);

  return (
    <Card orientation="horizontal" size="small">
      <label htmlFor={dropdownId}>Level</label>
      <Select
        id={dropdownId}
        onChange={onSelect}
        value={level}
      >
        {CHARACTER_LEVELS.map(selectableLevel => (
          <option key={selectableLevel}>{selectableLevel}</option>
        ))}
      </Select>
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
  level: PropTypes.oneOf(CHARACTER_LEVELS),
  onRemove: PropTypes.func,
  onSelectLevel: PropTypes.func,
};
