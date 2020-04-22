import { Comment } from 'postcss';
import { ControlDirective } from '@types';
import { RTL_CONTROL_DIRECTIVE_REG_EXP, CONTROL_DIRECTIVE, CONTROL_DIRECTIVE_BLOCK } from '@constants';

const CONTROL_DIRECTIVE_VALUES = Object.values(CONTROL_DIRECTIVE) as string[];
const CONTROL_DIRECTIVE_BLOCK_VALUES = Object.values(CONTROL_DIRECTIVE_BLOCK) as string[];

const isValidDirective = (match: (string | number | undefined)[]): boolean =>
    CONTROL_DIRECTIVE_VALUES.includes(`${match[2]}`) &&
        (
            match[1] === undefined ||
            CONTROL_DIRECTIVE_BLOCK_VALUES.includes(`${match[1]}`)
        );

export const getControlDirective = (comment: Comment): ControlDirective | null => {
    const commentStr = comment.toString();
    const match = commentStr.match(RTL_CONTROL_DIRECTIVE_REG_EXP);
    if (match && isValidDirective(match)) {
        const controlDirective: ControlDirective = {
            directive: match[2]
        };
        if (match[1]) {
            controlDirective.block = match[1];
        }
        /*if (match[3]) {
            controlDirective.raw = match[3];
        }*/
        return controlDirective;
    }
    return null;
};