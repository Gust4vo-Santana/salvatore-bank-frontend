import styled from 'styled-components';
import Logo from '../../atoms/logo/Logo';
import NavItem from '../../atoms/navItem/NavItem';

interface ITopBarProps {
    logo?: string,
    links: Array<{ text: string, href: string }>,
}

const StyledHeader = styled.header`
    display: flex;
    background-color: #3d3d3d;
    min-height: fit-content;
    max-width: 100%;
    min-width: fit-content;
    padding: 5px;
`;

const TopBar = ({ logo, links }: ITopBarProps) => {
  return (
    <StyledHeader>
        <Logo src={logo} />
        {links.map((link, index) => (
            <NavItem key={index} href={link.href}>{link.text}</NavItem>
        ))}
    </StyledHeader>
  );
};

export default TopBar;