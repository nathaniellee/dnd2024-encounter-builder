import { useCallback, useState } from 'react';
import { makeStyles } from '@fluentui/react-components';
import { EncounterSummary } from './encounter-summary/encounter-summary';
import { MonsterManager } from './monster-manager/monster-manager';
import { PartyManager } from './party-manager';
import {
  createMonster,
  createPlayerCharacter,
  createParty,
} from './utils';

const useStyles = makeStyles({
  header: {
    alignItems: 'center',
    backgroundColor: '#282c34',
    color: 'white',
    display: 'flex',
    fontSize: '24px',
    height: '96px',
    justifyContent: 'center',
  },
  main: {
    alignItems: 'center',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
});

function App() {
  const styles = useStyles();

  const [party, setParty] = useState(createParty());
  const [monsters, setMonsters] = useState([]);

  const onAddCharacter = useCallback(() => {
    setParty([
      ...party,
      createPlayerCharacter(),
    ]);
  }, [party]);

  const onRemoveCharacter = useCallback((id) => {
    if (party.length === 1) {
      setParty([]);
    } else {
      setParty(party.filter(character => id !== character.id));
    }
  }, [party]);

  const onSelectCharacterLevel = useCallback(({ id, selectedLevel }) => {
    setParty(party.map((character) => {
      if (id === character.id) {
        return {
          id,
          level: selectedLevel,
        };
      }
      return character;
    }));
  }, [party]);

  const onAddMonster = useCallback(() => {
    setMonsters([
      ...monsters,
      createMonster(),
    ]);
  }, [monsters]);

  const onRemoveMonster = useCallback((id) => {
    if (monsters.length === 1) {
      setMonsters([]);
    } else {
      setMonsters(monsters.filter(monster => id !== monster.id));
    }
  }, [monsters]);

  const onSelectCR = useCallback(({ id, selectedCR }) => {
    setMonsters(monsters.map((monster) => {
      if (id === monster.id) {
        return {
          cr: selectedCR,
          id,
        };
      }
      return monster;
    }));
  }, [monsters]);

  return (
    <div className="App">
      <header className={styles.header}>
        Dungeons & Dragons 2024 Encounter Builder
      </header>
      <div className={styles.main}>
        <PartyManager
          onAddCharacter={onAddCharacter}
          onRemoveCharacter={onRemoveCharacter}
          onSelectCharacterLevel={onSelectCharacterLevel}
          party={party}
        />
        <EncounterSummary party={party} />
        <MonsterManager
          onAddMonster={onAddMonster}
          onRemoveMonster={onRemoveMonster}
          monsters={monsters}
          onSelectCR={onSelectCR}
          party={party}
        />
      </div>
    </div>
  );
}

export default App;
