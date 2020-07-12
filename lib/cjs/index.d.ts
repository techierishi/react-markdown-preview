import React, { Component } from 'react';
import 'prismjs/components/prism-markup';
import { ReactMarkdownProps } from 'react-markdown';
import './styles/markdown.less';
import './styles/markdowncolor.less';
export type { ReactMarkdownProps, MarkdownAbstractSyntaxTree, NodeType, RemarkParseOptions, Position, Point, AlignType, ReferenceType, LinkTargetResolver, Renderers, } from 'react-markdown';
export interface IMarkdownPreviewProps extends Omit<ReactMarkdownProps, 'className'> {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    onScroll?: (e: React.UIEvent<HTMLDivElement>) => void;
    onMouseOver?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export interface IMarkdownPreviewState {
    value?: string;
}
export declare function TestComp(props: any): JSX.Element;
export default class MarkdownPreview extends Component<IMarkdownPreviewProps, IMarkdownPreviewState> {
    mdp: React.RefObject<HTMLDivElement>;
    loadedLang: string[];
    static defaultProps: IMarkdownPreviewProps;
    constructor(props: IMarkdownPreviewProps);
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: IMarkdownPreviewProps): void;
    shouldComponentUpdate(nextProps: IMarkdownPreviewProps, nextState: IMarkdownPreviewState): boolean;
    renderHTML(mdStr?: string): void;
    highlight(): Promise<void>;
    components: {
        PieChart: import("styled-components").StyledComponent<typeof TestComp, any, {}, never>;
    };
    renderers: {
        code: ({ language, value }: {
            language: any;
            value: any;
        }) => JSX.Element;
    };
    render(): JSX.Element;
}
