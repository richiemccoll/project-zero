const BASE_FONT_SIZE_PX = 16;

const defaultTheme = {
    fontSizes: [12, 16, 20, 24, 32, 40, 64],
    fontFamily: 'Helvetica Neue',
};

defaultTheme.fontSizes.heading = {
    large: defaultTheme.fontSizes[6] / BASE_FONT_SIZE_PX,
    medium: defaultTheme.fontSizes[5] / BASE_FONT_SIZE_PX,
    small: defaultTheme.fontSizes[3] / BASE_FONT_SIZE_PX,
    tiny: defaultTheme.fontSizes[2] / BASE_FONT_SIZE_PX,
};

export default defaultTheme;
