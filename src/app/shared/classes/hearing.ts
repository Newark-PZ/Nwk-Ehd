// tslint:disable: newline-per-chained-call
export class Hearing {
    id: string;
    agenda = '';
    fof = '';
    board: 'CPB' | 'EC' | 'LHPC' | 'ZBA';
    start: Date;
    link: string;
    timeUntil: number;
    withinLegalNotice: boolean;
    folderId: string;
    data: Array<{board: 'CPB' | 'EC' | 'LHPC' | 'ZBA'; app: string; address: string; link: string; type: string | 'folders'}>;
    title: string;
    constructor(
        options: {
            id: string,
            board: 'CPB' | 'EC' | 'LHPC' | 'ZBA',
            start: string | number,
            link: string,
            folderId?: string
        }) {
        this.board = options.board;
        this.id = options.id || `${options.board}${Math.random().toString()}`;
        this.start = new Date(options.start);
        this.timeUntil = this.start.getTime() - new Date().getTime();
        this.withinLegalNotice = this.timeUntil >= -3888000000 && this.timeUntil < -10800000;
        this.folderId = options.folderId || '';
        this.link = options.link || '';
        this.title = this.getTitle(this.board);
    }
    getTitle(board): string {
        switch (board) {
            case 'CPB': return 'Planning Board';
            case 'LHPC': return 'Historic Comm.';
            default: return 'Zoning Board';
        }
    }
}
