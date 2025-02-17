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
import {
  CHALLENGE_RATINGS,
  XP_BY_CHALLENGE_RATING,
} from '../constants';
import {
  getCRTextFromValue,
  getCRValueFromText,
  noop,
} from '../utils';

const getOptionText = (cr) => {
  const crText = getCRTextFromValue(cr);
  const xp = XP_BY_CHALLENGE_RATING[cr];

  return `${crText} (${xp} XP)`;
};

export const MonsterCard = ({
  cr = 0,
  id,
  onRemove = noop,
  onSelectCR = noop,
}) => {
  const dropdownId = `MonsterCard-cr-selector-${id}`;

  const onClickRemove = useCallback(() => {
    onRemove(id);
  }, [id, onRemove]);

  const onSelect = useCallback((event, { optionValue }) => {
    onSelectCR({
      id,
      selectedCR: getCRValueFromText(optionValue),
    });
  }, [id, onSelectCR]);

  return (
    <Card orientation="horizontal" size="small">
      <label htmlFor={dropdownId}>CR</label>
      <Dropdown
        id={dropdownId}
        onOptionSelect={onSelect}
        value={getOptionText(cr)}
      >
        {CHALLENGE_RATINGS.map((selectableCR) => {
          const optionText = getOptionText(selectableCR);
          return (
            <Option
              key={selectableCR}
              text={optionText}
              value={selectableCR}
            >
              {optionText}
            </Option>
          );
        })}
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

MonsterCard.propTypes = {
  cr: PropTypes.number,
  id: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
  onSelectCR: PropTypes.func,
};
