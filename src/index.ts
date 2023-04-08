import { Root, Plugin } from 'postcss';
import { PluginOptions } from '@types';
import { initStore } from '@data/store';
import { parseKeyFrames, parseAtRules } from '@parsers/atrules';
import { parseRules } from '@parsers/rules';
import {
    appendRules,
    appendKeyFrames,
    appendAutorenameRules
} from '@utilities/rules';
import { clean } from '@utilities/clean';

function postcssRTLCSS (options: PluginOptions = {}): Plugin {
    return ({
        postcssPlugin: 'postcss-rtlcss',
        Once(css: Root): void {
            initStore(options);
            parseKeyFrames(css);
            parseAtRules(css);
            parseRules(css);
            appendRules();
            appendKeyFrames();
            appendAutorenameRules();
            clean(css);
        }
    });
}

postcssRTLCSS.postcss = true;

export default postcssRTLCSS;