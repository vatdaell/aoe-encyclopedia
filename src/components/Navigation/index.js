import { Header, Anchor, Box, ResponsiveContext, Menu } from 'grommet';
import { Grommet as GrommetIcon, Menu as MenuIcon } from 'grommet-icons';


const pages = [
    {
        label: 'Civilizations',
        href: '/civilizations'
    },
    {
        label: 'Military',
        href: '/military',
    }
];

const SmallNavigation = () => {
    const items = pages.map(page => {
        return (
            {
                label: <Box pad="small" key={page.href}>{page.label}</Box>,
                href: page.href
            }
        );
    });

    return(
        <Box justify="end">
            <Menu
            a11yTitle="Navigation Menu"
            dropProps={{ align: { top: 'bottom', right: 'right' } }}
            icon={<MenuIcon color="brand" />}
            items={items}
            />
        </Box>
    );
};


const LargeNavigation = () => (
    <Box justify="end" direction="row" gap="medium">
        {
            pages.map(page => <Anchor key={page.href} href={page.href} label={page.label} />)
        }
    </Box>
);


const Navigation = () => (
    <Header background="dark-1" pad="medium" height="xsmall">
      <Anchor
        href="https://tools.grommet.io/"
        icon={<GrommetIcon color="brand" />}
        label="AOE II Encyclopedia"
      />
      <ResponsiveContext.Consumer>
        {size =>
          size === 'small' ? <SmallNavigation /> : <LargeNavigation />
        }
      </ResponsiveContext.Consumer>
    </Header>
);

export default Navigation;