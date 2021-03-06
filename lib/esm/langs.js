import _regeneratorRuntime from "@babel/runtime/regenerator";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
var langData = {
  meta: {},
  markup: {
    a: ['html', 'xml', 'svg', 'mathml']
  },
  css: {
    p: 'markup'
  },
  clike: {},
  javascript: {
    p: 'markup',
    r: 'clike',
    a: 'js'
  },
  abap: {},
  abnf: {},
  actionscript: {
    p: 'markup',
    r: 'javascript'
  },
  ada: {},
  apacheconf: {},
  apl: {},
  applescript: {},
  arduino: {
    r: 'cpp'
  },
  arff: {},
  asciidoc: {
    a: 'adoc'
  },
  asm6502: {},
  aspnet: {
    r: ['markup', 'csharp']
  },
  autohotkey: {},
  autoit: {},
  bash: {
    a: 'shell'
  },
  basic: {},
  batch: {},
  bison: {
    r: 'c'
  },
  bnf: {
    a: 'rbnf'
  },
  brainfuck: {},
  bro: {},
  c: {
    r: 'clike'
  },
  csharp: {
    r: 'clike',
    a: ['cs', 'dotnet']
  },
  cpp: {
    r: 'c'
  },
  cil: {},
  coffeescript: {
    r: 'javascript',
    a: 'coffee'
  },
  cmake: {},
  clojure: {},
  crystal: {
    r: 'ruby'
  },
  csp: {},
  'css-extras': {
    r: 'css'
  },
  d: {
    r: 'clike'
  },
  dart: {
    r: 'clike'
  },
  diff: {},
  django: {
    r: 'markup-templating',
    a: 'jinja2'
  },
  'dns-zone-file': {
    a: 'dns-zone'
  },
  docker: {
    a: 'dockerfile'
  },
  ebnf: {},
  eiffel: {},
  ejs: {
    r: ['javascript', 'markup-templating']
  },
  elixir: {},
  elm: {},
  erb: {
    r: ['ruby', 'markup-templating']
  },
  erlang: {},
  fsharp: {
    r: 'clike'
  },
  flow: {
    r: 'javascript'
  },
  fortran: {},
  gcode: {},
  gedcom: {},
  gherkin: {},
  git: {},
  glsl: {
    r: 'clike'
  },
  gml: {
    r: 'clike',
    a: 'gamemakerlanguage'
  },
  go: {
    r: 'clike'
  },
  graphql: {},
  groovy: {
    r: 'clike'
  },
  haml: {
    p: ['css', 'coffeescript', 'erb', 'javascript', 'less', 'markdown', 'ruby', 'scss', 'textile'],
    r: 'ruby'
  },
  handlebars: {
    r: 'markup-templating'
  },
  haskell: {
    a: 'hs'
  },
  haxe: {
    r: 'clike'
  },
  hcl: {},
  http: {
    p: ['javascript', 'markup']
  },
  hpkp: {},
  hsts: {},
  ichigojam: {},
  icon: {},
  inform7: {},
  ini: {},
  io: {},
  j: {},
  java: {
    r: 'clike'
  },
  javadoc: {
    p: ['scala'],
    r: ['markup', 'java', 'javadoclike']
  },
  javadoclike: {
    p: ['java', 'javascript', 'php']
  },
  javastacktrace: {},
  jolie: {
    r: 'clike'
  },
  jq: {},
  jsdoc: {
    p: ['actionscript', 'coffeescript'],
    r: ['javascript', 'javadoclike']
  },
  'js-extras': {
    p: ['actionscript', 'coffeescript', 'flow', 'n4js', 'typescript'],
    r: 'javascript'
  },
  'js-templates': {
    p: ['css', 'css-extras', 'graphql', 'markdown', 'markup'],
    r: 'javascript'
  },
  json: {},
  jsonp: {
    r: 'json'
  },
  json5: {
    r: 'json'
  },
  julia: {},
  keyman: {},
  kotlin: {
    r: 'clike'
  },
  latex: {
    a: ['tex', 'context']
  },
  less: {
    r: 'css'
  },
  lilypond: {
    r: 'scheme',
    a: 'ly'
  },
  liquid: {},
  lisp: {
    a: ['emacs', 'elisp', 'emacs-lisp']
  },
  livescript: {},
  lolcode: {},
  lua: {},
  makefile: {},
  markdown: {
    r: 'markup',
    a: 'md'
  },
  'markup-templating': {
    r: 'markup'
  },
  matlab: {},
  mel: {},
  mizar: {},
  monkey: {},
  n1ql: {},
  n4js: {
    p: ['jsdoc'],
    r: 'javascript',
    a: 'n4jsd'
  },
  'nand2tetris-hdl': {},
  nasm: {},
  nginx: {
    r: 'clike'
  },
  nim: {},
  nix: {},
  nsis: {},
  objectivec: {
    r: 'c'
  },
  ocaml: {},
  opencl: {
    p: ['c', 'cpp'],
    r: 'cpp'
  },
  oz: {},
  parigp: {},
  parser: {
    r: 'markup'
  },
  pascal: {
    a: 'objectpascal'
  },
  pascaligo: {},
  pcaxis: {
    a: 'px'
  },
  perl: {},
  php: {
    r: ['clike', 'markup-templating']
  },
  phpdoc: {
    r: ['php', 'javadoclike']
  },
  'php-extras': {
    r: 'php'
  },
  plsql: {
    r: 'sql'
  },
  powershell: {},
  processing: {
    r: 'clike'
  },
  prolog: {},
  properties: {},
  protobuf: {
    r: 'clike'
  },
  pug: {
    p: ['coffeescript', 'ejs', 'handlebars', 'less', 'livescript', 'markdown', 'scss', 'stylus', 'twig'],
    r: ['markup', 'javascript']
  },
  puppet: {},
  pure: {
    p: ['c', 'cpp', 'fortran']
  },
  python: {
    a: 'py'
  },
  q: {},
  qore: {
    r: 'clike'
  },
  r: {},
  jsx: {
    p: ['jsdoc', 'js-extras', 'js-templates'],
    r: ['markup', 'javascript']
  },
  tsx: {
    r: ['jsx', 'typescript']
  },
  renpy: {},
  reason: {
    r: 'clike'
  },
  regex: {
    p: ['actionscript', 'coffeescript', 'flow', 'javascript', 'typescript', 'vala']
  },
  rest: {},
  rip: {},
  roboconf: {},
  ruby: {
    r: 'clike',
    a: 'rb'
  },
  rust: {},
  sas: {},
  sass: {
    r: 'css'
  },
  scss: {
    r: 'css'
  },
  scala: {
    r: 'java'
  },
  scheme: {},
  'shell-session': {
    r: 'bash'
  },
  smalltalk: {},
  smarty: {
    r: 'markup-templating'
  },
  soy: {
    r: 'markup-templating'
  },
  'splunk-spl': {},
  sql: {},
  stylus: {},
  swift: {
    r: 'clike'
  },
  tap: {
    r: 'yaml'
  },
  tcl: {},
  textile: {
    p: 'css',
    r: 'markup'
  },
  toml: {},
  tt2: {
    r: ['clike', 'markup-templating']
  },
  twig: {
    r: 'markup'
  },
  typescript: {
    p: 'js-templates',
    r: 'javascript',
    a: 'ts'
  },
  't4-cs': {
    r: ['t4-templating', 'csharp'],
    a: 't4'
  },
  't4-vb': {
    r: ['t4-templating', 'visual-basic']
  },
  't4-templating': {},
  vala: {
    r: 'clike'
  },
  vbnet: {
    r: 'basic'
  },
  velocity: {
    r: 'markup'
  },
  verilog: {},
  vhdl: {},
  vim: {},
  'visual-basic': {
    a: 'vb'
  },
  wasm: {},
  wiki: {
    r: 'markup'
  },
  xeora: {
    r: 'markup',
    a: 'xeoracube'
  },
  xojo: {},
  xquery: {
    r: 'markup'
  },
  yaml: {
    a: 'yml'
  }
};
export function loadLang(_x) {
  return _loadLang.apply(this, arguments);
}

function _loadLang() {
  _loadLang = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(ext) {
    var langs;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            langs = [];
            Object.keys(langData).forEach(function (item) {
              var _langData$item = langData[item],
                  alias = _langData$item.a,
                  require = _langData$item.r;

              if (alias && (Array.isArray(alias) ? alias : [alias]).includes(ext)) {
                if (require) {
                  langs = Array.from(new Set([].concat(_toConsumableArray(langs), _toConsumableArray(Array.isArray(require) ? require : [require]))));
                }
              }

              if (ext === item) {
                if (require) {
                  langs = Array.from(new Set([].concat(_toConsumableArray(langs), _toConsumableArray(Array.isArray(require) ? require : [require]))));
                }

                langs.push(ext);
              }
            });
            _context.prev = 2;

            if (!(langs.length > 0)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", Promise.all(langs.map(function (key) {
              return import("prismjs/components/prism-".concat(key));
            })));

          case 5:
            _context.next = 9;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](2);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 7]]);
  }));
  return _loadLang.apply(this, arguments);
}

export default langData; 
//# sourceMappingURL=langs.js.map