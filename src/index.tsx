import React, { Component } from 'react';
import classnames from 'classnames';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown';
import allowNode from './allowNode';
import { loadLang } from './langs';
import SynHi from './SynHi'
import './styles/markdown.less';
import './styles/markdowncolor.less';
import styled from 'styled-components'

const JsxParser =  require('react-jsx-parser');

export type {
  ReactMarkdownProps,
  MarkdownAbstractSyntaxTree,
  NodeType,
  RemarkParseOptions,
  Position,
  Point,
  AlignType,
  ReferenceType,
  LinkTargetResolver,
  Renderers,
} from 'react-markdown';




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

export function TestComp(props: any) {

  return (<div>Test Comp <button>Submit</button>
  </div>)
}


const PieChart = styled(TestComp)`
  width: 100px;
  height: 100px;
`


export default class MarkdownPreview extends Component<IMarkdownPreviewProps, IMarkdownPreviewState> {
  public mdp = React.createRef<HTMLDivElement>();
  public loadedLang: string[] = ['markup'];
  public static defaultProps: IMarkdownPreviewProps = {
    renderers: {},
  }
  public constructor(props: IMarkdownPreviewProps) {
    super(props);
    this.state = {
      value: '' || props.source,
    };
  }
  componentDidMount() {
    this.highlight();
  }
  UNSAFE_componentWillReceiveProps(nextProps: IMarkdownPreviewProps) {
    if (nextProps.source !== this.props.source) {
      this.setState({ value: nextProps.source }, () => {
        this.highlight();
      });
    }
  }
  public shouldComponentUpdate(nextProps: IMarkdownPreviewProps, nextState: IMarkdownPreviewState) {
    return nextProps.source !== this.props.source
      || nextState.value !== this.state.value;
  }
  public renderHTML(mdStr?: string) {
    this.setState({ value: mdStr }, () => {
      this.highlight();
    });
  }
  public async highlight() {
    if (!this.mdp.current) return;
    const codes = this.mdp.current.getElementsByTagName('code') as unknown as HTMLElement[];
    for (const value of codes) {
      const tag = value.parentNode as HTMLElement;
      if (tag && tag.tagName === 'PRE' && /^language-/.test(value.className.trim())) {
        const lang = value.className.trim().replace(/^language-/, '');
        try {
          if (!this.loadedLang.includes(lang as never)) {
            this.loadedLang.push(lang);
            await loadLang(lang);
          }
          await Prism.highlightElement(value);
        } catch (error) { }
      }
    }
  }

   components = {
    PieChart
  }

  renderers = {
    code: ({ language, value }: { language: any, value: any }) => {
      console.log("encdec", language, value);

      if(language && value){
        if (language === 'encdec') {
          return <div className="encDecWrapper"> <span>{value}</span> <span><button>Save</button></span></div>
        }
      }
      

      return (language && value) ? <SynHi language={language}>{value}</SynHi> : <span />
    }
  }


  render() {
    const { className, style, onScroll, onMouseOver, ...other } = this.props;
    const cls = classnames(className, 'wmde-markdown', 'wmde-markdown-color');
    return (
      <div ref={this.mdp} onScroll={onScroll} style={style} onMouseOver={onMouseOver} className={cls} >
        <ReactMarkdown escapeHtml={false} allowNode={allowNode} {...other} source={this.state.value} renderers={this.renderers as any} />
      </div>
    );
  }
}