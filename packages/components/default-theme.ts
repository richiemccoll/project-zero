const BASE_FONT_SIZE_PX = 16;
const BASE_LINE_HEIGHT = 1.5;

type ColorMap = {
    default: string;
    active: string;
    disabled: string;
};

type TextMap = {
    default: string;
    disabled: string;
};

type ButtonsMap = {
    color: string;
    backgroundColor: string;
    active: string;
    disabled: string;
};

type LinksMap = {
    primary: {
        color: string;
    };
    secondary: {
        color: string;
    };
};

export type Theme = {
    fontSizes: Array<number>;
    headingFontSizes: {
        large: number;
        medium: number;
        small: number;
        tiny: number;
    };
    textFontSizes: {
        medium: number;
        small: number;
    };
    fontFamily: string;
    colors: {
        primary: ColorMap;
        dark: ColorMap;
        grey: {
            regular: ColorMap;
            light: ColorMap;
            dark: ColorMap;
        };
        text: {
            dark: TextMap;
            light: TextMap;
        };
    };
    buttons: {
        primary: ButtonsMap;
        dark: ButtonsMap;
        light: ButtonsMap;
    };
    verticalSpacing: {
        tiny: number;
        small: number;
        regular: number;
        large: number;
    };
    links: LinksMap;
};

const colors = {
    primary: {
        default: '#7CB7DE',
        active: '#54A1D4',
        disabled: '#CAE2F2',
    },
    dark: {
        default: '#3C505D',
        active: '#28353E',
        disabled: '#64859B',
    },
    grey: {
        regular: {
            default: '#CDD2D6',
            active: '',
            disabled: '',
        },
        light: {
            default: '#EBF4FA',
            active: '#E2EFF8',
            disabled: '#F3F8FC',
        },
        dark: {
            default: '#94A0A8',
            active: '',
            disabled: '',
        },
    },
    text: {
        dark: {
            default: '#0F1010',
            disabled: '#555B5E',
        },
        light: {
            default: '#EBF4FA',
            disabled: '#CEE4F3',
        },
    },
};

const fontSizes = [12, 16, 20, 24, 32, 40, 64];

const defaultTheme: Theme = {
    fontSizes,
    headingFontSizes: {
        large: fontSizes[6] / BASE_FONT_SIZE_PX,
        medium: fontSizes[5] / BASE_FONT_SIZE_PX,
        small: fontSizes[3] / BASE_FONT_SIZE_PX,
        tiny: fontSizes[2] / BASE_FONT_SIZE_PX,
    },
    textFontSizes: {
        medium: fontSizes[1] / BASE_FONT_SIZE_PX,
        small: fontSizes[0] / BASE_FONT_SIZE_PX,
    },
    fontFamily: 'Helvetica Neue',
    colors,
    buttons: {
        primary: {
            color: colors.text.dark.default,
            backgroundColor: colors.primary.default,
            active: colors.primary.active,
            disabled: colors.primary.disabled,
        },
        dark: {
            color: colors.text.light.default,
            backgroundColor: colors.dark.default,
            active: colors.dark.active,
            disabled: colors.dark.disabled,
        },
        light: {
            color: colors.text.dark.default,
            backgroundColor: colors.grey.light.default,
            active: colors.grey.light.active,
            disabled: colors.grey.light.disabled,
        },
    },
    links: {
        primary: {
            color: colors.primary.default,
        },
        secondary: {
            color: colors.dark.default,
        },
    },
    verticalSpacing: {
        tiny: BASE_LINE_HEIGHT / 3,
        small: BASE_LINE_HEIGHT / 2,
        regular: BASE_LINE_HEIGHT,
        large: BASE_LINE_HEIGHT * 2,
    },
};

export default defaultTheme;
