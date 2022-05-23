import mermaid from 'mermaid'


mermaid.initialize({
    theme: 'forest',
    // themeCSS: '.node rect { fill: red; }',
    logLevel: 3,
    securityLevel: 'loose',
    flowchart: { curve: 'basis' },
    gantt: { axisFormat: '%m/%d/%Y' },
    sequence: { actorMargin: 50 },
    // sequenceDiagram: { actorMargin: 300 } // deprecated
  });