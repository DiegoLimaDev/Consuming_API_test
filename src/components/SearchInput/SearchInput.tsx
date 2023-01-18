import { Icon } from '@iconify/react';
import { IconButton, InputAdornment } from '@mui/material';
import React from 'react';
import { useSearchValue } from '../../utils/GlobalContext';
import { theme } from '../../utils/theme';
import { Container, CustomInput } from './SearchInputStyle';

export const SearchInput = () => {
  const { value, setValue } = useSearchValue();
  // const [string, setString] = useState('');

  return (
    <Container>
      <CustomInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Pesquisar"
        type="text"
        // onKeyDown={(e) => (e.key === 'Enter' ? setValue(string) : null)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" edge="end">
              <Icon
                icon="ion:search-outline"
                width={25}
                height="25"
                color={theme.colors.black}
              />
            </IconButton>
          </InputAdornment>
        }
      />
    </Container>
  );
};
