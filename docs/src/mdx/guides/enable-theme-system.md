import { Link } from 'gatsby';

# Enable Theme System

<div class="note note-info">
  <div class="note-title">Note</div>
  <div class="note-body">
    <p>
      If you use our
      <Link to="/guides/install-based-on-starter-kit"> oah-admin kit </Link>
      then you already have the Advanced setup in place.
    </p>
    <p>
      If you use our
      <Link to="/guides/start-new-project"> Starter project </Link>
      then you already have the Normal setup in place.
    </p>
  </div>
</div>

## Normal Setup

To enable theme you must use [styled-components](https://www.styled-components.com/docs) package
`themes` function take 2 args first one theme name second take object of settings that need to custom theme or use it in your styled components

```tsx
// import ThemeProvider from styled-components to give it theme values
import { ThemeProvider } from 'styled-components';
import { Layout, createTheme } from 'oah-ui';

export default function LayoutPage(props) {
  // define default theme and direction
  const [theme, setTheme] = useState('default');
  const [dir, setDir] = useState('ltr');

  // Change theme
  const changeTheme = newTheme => {
    setTheme(newTheme);
  };
  // Change Direction from Ltr to Rtl
  const changeDir = () => {
    const newDir = dir === 'ltr' ? 'rtl' : 'ltr';
    setDir(newDir);
  };

  // to enable direction you must send dir here and in layout component
  return (
    <ThemeProvider
      theme={themes(theme, { dir, fontSize: '2rem', fontMain: 'font family' })}
    >
      <Layout dir={dir} />
    </ThemeProvider>
  );
}
```

##### Global style

You must enable Global style make new file with any name will be like this example:

```jsx
import { createGlobalStyle } from 'styled-components';
import { GlobalStyle } from 'oah-ui';

const SimpleLayout = createGlobalStyle`
  ${GlobalStyle}
  html{
    font-size: 16px;
  }
`;
export defaut SimpleLayout;
```

Then you need to import in LayoutPage see example:

```jsx{8}
import SimpleLayout from './SimpleLayout';


return (
    <ThemeProvider
      theme={themes(theme, { dir, fontSize: '2rem', fontMain: 'font family' })}
    >
      <SimpleLayout/>
      <Layout dir={dir} />
      ...
```

<div class="note note-info section-end">
  <div class="note-title">Note</div>
  <div class="note-body">
    Variables are accessible simply using a call of `$
    {({ theme }) => theme.variables}` function in styled components.
  </div>
</div>

## Advanced setup

**When**: You need to add multiple themes.

This setup assumes that you have gone through the _Normal Setup_ steps but you will take `themes` function and custom it

```js
import { themes } from 'oah-ui/theme';

export function themeService(theme, dir) {
  switch (theme) {
    case 'corporate':
      return themes(theme, { dir, ...customCorporate });
    case 'dark':
      // this will take all default theme variables and over it with your custom variables
      // if you want to inherit from another theme you can pase cosmic or corporate if first args
      return themes('corporate', { dir, ...customDark });
    case 'cosmic':
    default:
      return themes(theme, { dir });
  }
}
//  you can custom oah theme
const customCorporate = {
  colorBg: '#4ca6ff',
  shadow: '0 1px 2px 0 #3780c0',
  layoutBg: '#ffffff',
  colorFg: '#222222'
};

const customDark = {
  colorBg: '#222222',
  shadow: '0 1px 2px 0 #000000',
  colorFg: '#303030',
  layoutBg: '#ededed'
};
```

After you end your `themeService` function you need to add it in your layout page

```jsx
import { ThemeProvider } from 'styled-components';
import { themeService } from './themeService';
import SimpleLayout from './SimpleLayout';

export default function LayoutPage(props) {
  // define default theme and direction
  const [theme, setTheme] = useState('default');
  const [dir, setDir] = useState('ltr');

  // Change theme
  const changeTheme = newTheme => {
    setTheme(newTheme);
  };
  // Change Direction from Ltr to Rtl
  const changeDir = () => {
    const newDir = dir === 'ltr' ? 'rtl' : 'ltr';
    setDir(newDir);
  };

  // add custom theme function here and give it theme name and dirction value
  return (
    <ThemeProvider theme={themeService(theme, dir)}>
      <SimpleLayout />
      <Layout dir={dir} />
    </ThemeProvider>
  );
}
```

## Related Articles

- [Theme System Concepts](/guides/theme-system).
- [Default Theme variables table](/themes/default).
- [Cosmic Theme variables table](/themes/cosmic).