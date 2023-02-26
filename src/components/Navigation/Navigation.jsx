import { StyledNav } from './Navigation.styled';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <StyledNav to="/">Home</StyledNav>
        </li>
        <li>
          <StyledNav to="add">Add</StyledNav>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
