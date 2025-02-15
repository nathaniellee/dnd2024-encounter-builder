import { useCallback, useState } from 'react';
import { PartyManager } from './party/partyManager';
import { createParty } from './utils';
import './App.css';

function App() {
  const [party, setParty] = useState(createParty());

  const onRemoveCharacter = useCallback((id) => {
    // If this removes the last character in the party, then generate a new default party.
    if (party.length === 1) {
      setParty(createParty());
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

  return (
    <div className="App">
      <header className="App-header">
        Dungeons & Dragons 2024 Encounter Builder
      </header>
      <div className="App-main">
        <PartyManager
          onRemoveCharacter={onRemoveCharacter}
          onSelectCharacterLevel={onSelectCharacterLevel}
          party={party}
        />
      </div>
    </div>
  );
}

export default App;
