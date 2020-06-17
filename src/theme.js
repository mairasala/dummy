
const PALETTE= {
  green: '#007a7c',
  grey: '#737373',
  dark: '#032b43',
  darkGreen: '#005658',
  darkGrey: '#3c3c3c',
  black: '#1a1a1a',
  white: '#ffffff',
  light: '#f9f9f9',
  lightGreen: '#26a69a',
  lightGrey: '#d2d2d2',
  lightDark: '#3d4a52',
  softLightGreen: '#d0e9e7',
  softLightBlue: '#d0dce9',
  softLightGrey: '#fafafa',
  softDarkGreen: '#a1d4d0',
  softBrightGreen1: '#cdf7ea',
  softBrightGreen2: '#9ceed5',
  successColor: '#008000',
  warningColor: '#ea9800',
  errorColor: '#d53530',
  infoColor: '#1276CE',
  successSoftColor: '#dceddf',
  warningSoftColor: '#f0eee1',
  errorSoftColor: '#f1e5e4',
  infoSoftColor: '#D3DCFC',
  activeColor: '#f1f1f1',
  primaryIcon: '#032b43',
  secondaryIcon: '#a1d4d0'
}

const BREAKPOINTS = {
  values: {
    xs: 360,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    mobile: 360,
    mobileL: 576,
    tablet: 768,
    desktop: 1024,
    desktopM: 1280,
    desktopL: 1920
  }
}

const SPACING = 10
const baseTheme = {
  spacing: SPACING,
  breakpoints: BREAKPOINTS,
  typography: {
    fontFamily: 'Lato, Helvetica, Arial, Sans-Serif',
    h1: {
      fontFamily: 'Raleway, Helvetica',
      fontSize: '3.6rem',
      color: PALETTE.dark,
      fontWeight: 700
    },
    h2: {
      fontFamily: 'Raleway, Helvetica',
      fontSize: '2.6rem',
      color: PALETTE.dark,
      fontWeight: 700
    },
    h3: {
      fontFamily: 'Raleway, Helvetica',
      fontSize: '2.2rem',
      color: PALETTE.black,
      fontWeight: 500
    },
    h4: {
      fontFamily: 'Raleway, Helvetica',
      fontSize: '1.8rem',
      color: PALETTE.dark,
      fontWeight: 700
    },
    subtitle1: {
      fontSize: '1.6rem',
      color: PALETTE.lightDark,
      fontWeight: 400
    },
    subtitle2: {
      fontSize: '1.6rem',
      color: PALETTE.dark,
      lineHeight: `${SPACING * 2}px`,
      fontWeight: 700
    },
    body1: {
      fontSize: '1.6rem',
      color: PALETTE.darkGrey,
      fontWeight: 400
    },
    body2: {
      fontSize: '1.4rem',
      color: PALETTE.darkGrey,
      fontWeight: 400
    },
    caption: {
      fontSize: '1.4rem',
      color: PALETTE.grey,
      fontWeight: 700
    },
    link: {
      fontSize: '1.6rem',
      color: PALETTE.green,
      fontWeight: 400
    },
    button: {
      fontSize: '1.6rem',
      fontWeight: 700,
      '&:first-letter': {
        textTransform: 'capitalize'
      }
    }
  },
  palette: {
    white: PALETTE.white,
    light: PALETTE.light,
    dark: PALETTE.dark,
    softLightBlue: PALETTE.softLightBlue,
    softLightGreen: PALETTE.softLightGreen,
    lightGrey: PALETTE.lightGrey,
    backdrop: PALETTE.grey,
    background: {
      default: PALETTE.white
    },
    primary: {
      main: PALETTE.green,
      light: PALETTE.lightGreen,
      dark: PALETTE.darkGreen
    },
    secondary: {
      main: PALETTE.darkGreen
    },
    grey: {
      main: PALETTE.grey
    },
    text: {
      primary: PALETTE.dark,
      secondary: PALETTE.black
    },
    error: {
      main: PALETTE.errorColor,
      light: PALETTE.errorSoftColor
    },
    warning: {
      main: PALETTE.warningColor,
      light: PALETTE.warningSoftColor
    },
    success: {
      main: PALETTE.successColor,
      light: PALETTE.successSoftColor
    },
    info: {
      main: PALETTE.infoColor,
      light: PALETTE.infoSoftColor
    }
  },
  overrides: {
    MuiContainer: {
      root: {
        backgroundColor: PALETTE.white,
        minHeight: '100vh'
      }
    },
    MuiAppBar: {
      root: {
        boxShadow: 'none'
      },
      colorPrimary: {
        backgroundColor: PALETTE.dark
      }
    },
    MuiTab: {
      root: {
        textTransform: 'capitalize',
        minWidth: 'auto !important'
      },
      textColorPrimary: {
        color: PALETTE.green
      },
      textColorInherit: {
        color: PALETTE.dark,
        '&$selected': {
          color: PALETTE.green
        }
      }
    },
    MuiTabs: {
      flexContainer: {
        justifyContent: 'space-between'
      }
    },
    MuiButton: {
      root: {
        borderRadius: 3,
        textTransform: 'none',
        minWidth: SPACING * 12
      },
      contained: {
        padding: `${SPACING}px ${SPACING * 2}px`,
        cursor: 'pointer',
        border: 'none',
        transition: 'all 0.2s',
        '&:disabled': {
          pointerEvents: 'none'
        }
      },
      containedPrimary: {
        color: PALETTE.white,
        backgroundColor: PALETTE.green,
        '&:hover': {
          backgroundColor: PALETTE.darkGreen
        },
        '&:focus': {
          backgroundColor: PALETTE.darkGreen
        },
        '&:disabled': {
          backgroundColor: PALETTE.grey,
          color: PALETTE.white
        }
      },
      containedSecondary: {
        color: PALETTE.green,
        backgroundColor: PALETTE.white,
        '&:hover': {
          backgroundColor: PALETTE.light
        },
        '&:focus': {
          backgroundColor: PALETTE.light
        },
        '&:disabled': {
          backgroundColor: PALETTE.white,
          color: PALETTE.grey,
          borderColor: PALETTE.grey
        }
      }
    },
    MuiFab: {
      root: {
        borderRadius: '4px',
        backgroundColor: PALETTE.green,
        width: '4rem',
        height: '4rem',
        '& .MuiSvgIcon-root': {
          fontSize: '2.5rem'
        },
        '&:hover': {
          backgroundColor: PALETTE.darkGreen
        }
      }
    },
    MuiSwitch: {
      root: {
        height: 'null',
        width: 'null'
      },
      colorSecondary: {
        '&$checked': {
          color: PALETTE.white
        },
        '&$checked + $track': {
          backgroundColor: PALETTE.lightGreen,
          opacity: 1
        }
      },
      switchBase: {
        top: '5px',
        left: '5px'
      },
      track: {
        height: '3.1rem',
        width: '5.1rem',
        borderRadius: '5rem'
      },
      thumb: {
        width: '2.7rem',
        height: '2.7rem'
      }
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: `1px solid ${PALETTE.dark}`
        },
        '&$disabled': {
          '&:before': {
            borderBottomStyle: 'solid'
          }
        },
        '&:after': {
          borderBottom: `2px solid ${PALETTE.lightGreen}`
        }
      }
    },
    MuiLink: {
      root: {
        textDecoration: 'none',
        color: 'inherit'
      }
    },
    MuiLinearProgress: {
      root: {
        height: '6px',
        borderRadius: '3px'
      },
      colorPrimary: {
        backgroundColor: PALETTE.softLightGreen
      }
    },
    MuiFormLabel: {
      root: {
        '&$error': {
          color: PALETTE.darkGrey
        },
        '&$focused': {}
      },
      asterisk: {
        display: 'none'
      }
    },
    MuiSvgIcon: {
      root: {
        fontSize: '2.0rem'
      }
    }
  },
  composed: {
    SplashScreen: {
      background: PALETTE.dark
    },
    AppLayout: {
      paddingTop: 32,
      paddingTopDesktopL: 52,
      paddingXTablet: 24,
      paddingXDesktop: 80,
      paddingXDesktopL: 160,
      maxWidthDesktopL: 1280
    },
    AppHeader: {
      imgMaxHeight: '220px',
      imgMaxWidth: '320px',
      infoContainerWidth: {
        mobile: '280px',
        tablet: '640px'
      }
    },
    NavBar: {
      backgroundColor: PALETTE.dark,
      textColor: PALETTE.light,
      activeLinkColor: PALETTE.lightGreen,
      headerHeight: SPACING * 7
    },
    Player: {
      headerColor: PALETTE.dark,
      headerTextColor: PALETTE.light,
      backgroundColor: PALETTE.white,
      borderColor: PALETTE.lightGrey
    },
    FluidGrid: {
      minColWidth: '280px',
      border: {
        width: SPACING * 0.1,
        color: PALETTE.lightGrey
      },
    },
    ImagelessCard: {
      backgroundColor: PALETTE.white,
      activeColor: PALETTE.activeColor,
      borderColor: PALETTE.lightGrey
    },
    ListContainer1: {
      backgroundColor: PALETTE.softLightGrey,
      borderColor: PALETTE.lightGrey
    },
    ListContainer2: {
      backgroundColor: PALETTE.white,
      borderColor: PALETTE.lightGrey
    },
    Status: {
      color: PALETTE.dark,
      secondaryColor: PALETTE.softDarkGreen
    },
    Icon: {
      main: PALETTE.primaryIcon,
      secondary: PALETTE.secondaryIcon,
      size: {
        small: SPACING * 1.8,
        medium: SPACING * 2.4,
        big: SPACING * 3,
        large: SPACING * 3.6
      }
    },
    FoldableList: {
      border: {
        width: SPACING * 0.1,
        radius: SPACING * 0.3,
        color: PALETTE.lightGrey
      },
      boxShadow: 'none',
      backgroundColor: PALETTE.white
    },
    ContentCard: {
      minHeight: '60px'
    },
    PaddingWrapper: {
      paddingSize: SPACING * 1.2
    }
  }
}

export default baseTheme
