import { useCallback, useState } from 'react';
import { PartyManager } from './party/partyManager';
import { createParty } from './utils';
import './App.css';

function App() {
  const [party, setParty] = useState(createParty());
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
          onSelectCharacterLevel={onSelectCharacterLevel}
          party={party}
        />
      </div>
    </div>
  );
}

export default App;
