import React, {
    JSX,
    ReactNode,
    createContext,
    useContext,
    useState,
    useEffect
} from 'react';
import { Mode, Source } from 'postcss-rtlcss/options';
import { PluginOptions, FetchOptions } from '@types';
import { breakpointSizes } from '@constants';
import { useApi } from '@hooks/useApi';

export interface WindowSizes {
    windowHeight: number;
    windowWidth: number;
    panelHeight: number;
    panelWidth: number;
    isSmallScreen: boolean;
}

export interface AppProviderContext {
    canShare: boolean;
    ready: boolean;
    token: string;
    fetchCode: string;
    fetchOptions: FetchOptions;
    code: string;
    optionsOpen: boolean;
    options: PluginOptions;
    windowSizes: WindowSizes;
    setCode: (code: string) => void;
    share: (code: string, options: string) => void;
    setOptions: (options: PluginOptions) => void;
    setOptionsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    changeOptionsMode: (mode: Mode) => void;
    changeOptionsSource: (source: Source) => void;
    changeOptionsSafeBothPrefix: (safeBothPrefix: boolean) => void;
    changeOptionsIgnorePrefixedRules: (ignorePrefixedRules: boolean) => void;
    changeOptionsProcessUrls: (processUrls: boolean) => void;
    changeOptionsProcessRuleNames: (processRuleNames: boolean) => void;
    changeOptionsProcessKeyframes: (processKeyFrames: boolean) => void;
    changeOptionsProcessEnv: (processEnv: boolean) => void;
    changeOptionsUseCalc: (useCalc: boolean) => void;
    changeOptionsGreedy: (greedy: boolean) => void;
}

const getWindowSizes = (): WindowSizes => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    const isSmallScreen = width < breakpointSizes.small;
    const panelHeight = isSmallScreen
        ? (height - 150) / 2
        : height - 120;
    const panelWidth = isSmallScreen
        ? width - 10
        : Math.floor((width - 30) / 2);

    return {
        windowHeight: height,
        windowWidth: width,
        panelHeight,
        panelWidth,
        isSmallScreen
    };
};

const defaultOptions: PluginOptions = {};

const windowSizes = getWindowSizes();

export const AppContext = createContext<AppProviderContext>({} as AppProviderContext);

export const AppProvider = (props: { children?: ReactNode }): JSX.Element => {

    let delay: number;
    const [ code, setCode ] = useState<string>(null);
    const [ options, setOptions ] = useState<PluginOptions>(defaultOptions);
    const [ sizes, setSizes ] = useState<WindowSizes>(windowSizes);
    const [ optionsOpen, setOptionsOpen ] = useState<boolean>(false);
    const { canShare, ready, token, fetchCode, fetchOptions, share } = useApi();

    useEffect(() => {
        window.removeEventListener('resize', resize);
        window.addEventListener('resize', resize);
        return (): void => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    const resize = (): void => {
        if (delay) window.clearTimeout(delay);
        delay = window.setTimeout((): void => {
            const windowSizes = getWindowSizes();
            setSizes(windowSizes);
        }, 100);
    };

    const changeOptionsMode = (mode: Mode): void => setOptions({ ...options, mode });
    const changeOptionsSource = (source: Source): void => setOptions({ ...options, source });
    const changeOptionsSafeBothPrefix = (safeBothPrefix: boolean): void => setOptions({...options, safeBothPrefix});
    const changeOptionsIgnorePrefixedRules = (ignorePrefixedRules: boolean) => setOptions({...options, ignorePrefixedRules});
    const changeOptionsProcessUrls = (processUrls: boolean): void => setOptions({ ...options, processUrls });
    const changeOptionsProcessRuleNames = (processRuleNames: boolean): void => setOptions({ ...options, processRuleNames });
    const changeOptionsProcessKeyframes = (processKeyFrames: boolean): void => setOptions({ ...options, processKeyFrames });
    const changeOptionsProcessEnv = (processEnv: boolean): void => setOptions({ ...options, processEnv });
    const changeOptionsUseCalc = (useCalc: boolean): void => setOptions({ ...options, useCalc });
    const changeOptionsGreedy = (greedy: boolean): void => setOptions({ ...options, greedy });

    const providerData = {
        canShare,
        ready,
        token,
        fetchCode,
        fetchOptions,
        code,
        options,
        optionsOpen,
        setCode,
        share,
        setOptions,
        setOptionsOpen,
        changeOptionsMode,
        changeOptionsSource,
        changeOptionsSafeBothPrefix,
        changeOptionsIgnorePrefixedRules,
        changeOptionsProcessUrls,
        changeOptionsProcessRuleNames,
        changeOptionsProcessKeyframes,
        changeOptionsProcessEnv,
        changeOptionsUseCalc,
        changeOptionsGreedy,
        windowSizes: sizes
    };

    return (
        <AppContext.Provider value={providerData}>
            { props.children }
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppProviderContext => useContext<AppProviderContext>(AppContext);