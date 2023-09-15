import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <View style = {{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
        placeholder="Pesquisar..."
        value={query}
        onChangeText={(text) => setQuery(text)}
        onSubmitEditing={handleSearch}
        style={{ flex: 1, paddingVertical: 8, paddingLeft: 10, fontSize: 16 }}
      />
      <Icon
        name="search"
        type="material"
        onPress={handleSearch}
        style={{ paddingLeft: 10 }}
      />
    </View>
  );
};

export default SearchBar;
