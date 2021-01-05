import { HearingInfo } from '../models';

// tslint:disable: newline-per-chained-call
export class Hearing {
    id: string;
    agenda = '';
    fof = '';
    board: 'CPB' | 'EC' | 'LHPC' | 'RC' | 'ZBA';
    start: Date;
    link: string;
    timeUntil: number;
    withinLegalNotice: boolean;
    folderId: string;
    data: Array<HearingInfo>;
    title: string;
    constructor(
        options: {
            id: string,
            board: 'CPB' | 'EC' | 'LHPC' | 'RC' | 'ZBA',
            start: string | number,
            link?: string,
            folderId?: string
        }) {
        this.board = options.board;
        this.id = options.id;
        this.start = new Date(options.start);
        this.timeUntil = this.start.valueOf() - new Date().valueOf();
        this.withinLegalNotice = this.timeUntil >= -3888000000 && this.timeUntil < -19800000;
        this.folderId = options.folderId || '';
        this.link = options.link || '';
        this.title = this.getTitle(this.board);
    }
    getTitle(board): string {
        switch (board) {
            case 'CPB': return 'Planning Board';
            case 'EC': return 'Environmental Comm.';
            case 'LHPC': return 'Historic Comm.';
            case 'RC': return 'Rent Control';
            default: return 'Zoning Board';
        }
    }
}
