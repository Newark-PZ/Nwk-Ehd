export class Hearing {
    id: string;
    board: 'ZBA' | 'CPB' | 'EC' | 'LHCP';
    title: string;
    start: Date;
    end: Date;
    link: string;
    timeUntil: 'passed' | number;
    applications: Array<string>;
    folder: string;
    desc: {board: 'ZBA' | 'CPB' | 'EC' | 'LHCP'; applications: Array<string>; folderId: string};
    constructor(
        options: {
            id?: string,
            board?: 'ZBA' | 'CPB' | 'EC' | 'LHCP',
            description: string,
            title: string,
            start: string | number,
            end?: string | number,
            link?: string
        }) {
        this.desc = JSON.parse(options.description) as {
            board: 'ZBA' | 'CPB' | 'EC' | 'LHCP'; applications: Array<string>; folderId: string;
        };
        this.applications = this.desc.applications;
        this.board = this.desc.board;
        this.id = options.id || `${options.board}${(Math.random() * 10).toString()}`;
        this.title = options.title;
        this.start = new Date(options.start);
        this.end = new Date(options.end || this.start.getDate() + 1);
        this.timeUntil = Math.abs(this.start.getDate() - new Date().getDate());
        this.link = options.link || this.board === 'CPB'
            ? 'https://us02web.zoom.us/j/85992872085' : 'https://us02web.zoom.us/j/87298686457';
        this.folder = this.desc.folderId ? `https://drive.google.com/drive/folders/${this.desc.folderId}` : '';
    }
}
