import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import { palette } from '@primeng/themes';

const colors = palette('#33C1ED');
export const MyPreset = definePreset(Aura,
     {
    semantic: {
        primary: colors
    }
});