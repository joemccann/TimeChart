export class Legend {
    constructor(el, options) {
        var _a;
        this.el = el;
        this.options = options;
        el.style.position = 'relative';
        this.legend = document.createElement('chart-legend');
        const ls = this.legend.style;
        ls.position = 'absolute';
        ls.right = `${options.paddingRight}px`;
        ls.top = `${options.paddingTop}px`;
        const legendRoot = this.legend.attachShadow({ mode: 'open' });
        const style = document.createElement('style');
        style.textContent = `
        .timechart-legend.border {
            background: white;
            border: 1px solid black;
            padding: 5px;
        }
        .timechart-legend .item {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
        }
        .timechart-legend .item .example {
            width: 50px;
            margin-right: 5px;
            max-height: 1em;
        }`;
        legendRoot.appendChild(style);
        const border = document.createElement('div');
        border.className = 'timechart-legend border';
        for (const s of options.series) {
            const item = document.createElement('div');
            item.className = 'item';
            const example = document.createElement('div');
            example.className = 'example';
            example.style.height = `${(_a = s.lineWidth) !== null && _a !== void 0 ? _a : options.lineWidth}px`;
            example.style.backgroundColor = s.color.toString();
            item.appendChild(example);
            const name = document.createElement('label');
            name.textContent = s.name;
            item.appendChild(name);
            border.appendChild(item);
        }
        legendRoot.appendChild(border);
        el.appendChild(this.legend);
    }
    update() {
    }
}
//# sourceMappingURL=legend.js.map