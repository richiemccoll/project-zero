const BASE_FONT_SIZE_PX = 16;
const BASE_LINE_HEIGHT = 1.5;

const defaultTheme = {
    fontSizes: [12, 16, 20, 24, 32, 40, 64],
    fontFamily: 'Helvetica Neue',
    colors: {
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
            regular: '#CDD2D6',
            light: {
                default: '#EBF4FA',
                active: '#D6E9F5',
                disabled: '#F3F8FC',
            },
            dark: '#94A0A8',
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
    },
};

defaultTheme.fontSizes.heading = {
    large: defaultTheme.fontSizes[6] / BASE_FONT_SIZE_PX,
    medium: defaultTheme.fontSizes[5] / BASE_FONT_SIZE_PX,
    small: defaultTheme.fontSizes[3] / BASE_FONT_SIZE_PX,
    tiny: defaultTheme.fontSizes[2] / BASE_FONT_SIZE_PX,
};

defaultTheme.fontSizes.text = {
    medium: defaultTheme.fontSizes[1] / BASE_FONT_SIZE_PX,
    small: defaultTheme.fontSizes[0] / BASE_FONT_SIZE_PX,
};

defaultTheme.buttons = {
    primary: {
        color: defaultTheme.colors.text.dark,
        backgroundColor: defaultTheme.colors.primary.default,
        active: defaultTheme.colors.primary.active,
        disabled: defaultTheme.colors.primary.disabled,
    },
    dark: {
        color: defaultTheme.colors.text.light,
        backgroundColor: defaultTheme.colors.dark.default,
        active: defaultTheme.colors.dark.active,
        disabled: defaultTheme.colors.dark.disabled,
    },
    light: {
        color: defaultTheme.colors.text.dark,
        backgroundColor: defaultTheme.colors.grey.light.default,
        active: defaultTheme.colors.grey.light.active,
        disabled: defaultTheme.colors.grey.light.disabled,
    },
};

defaultTheme.verticalSpacing = {
    regular: BASE_LINE_HEIGHT,
    small: BASE_LINE_HEIGHT / 2,
    large: BASE_LINE_HEIGHT * 2,
};

export default defaultTheme;
