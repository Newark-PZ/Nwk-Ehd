
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { DocGroup } from '../../models';

@Component({
    selector: 'app-file-list-control',
    styleUrls: ['./filelist.component.scss'],
    // tslint:disable: component-max-inline-declarations template-i18n template-no-call-expression
    template: `
        <span class="filterLabel">Group</span>
        <mat-tree [dataSource]="docGroups" [treeControl]="treeControl" class="files-tree">
            <mat-tree-node *matTreeNodeDef="let node" matTreeNodeToggle>
                <li class="mat-tree-node" (click)="groupSelect(node, node.group)">
                    <button mat-icon-button disabled></button>
                    {{node.name}}
                </li>
            </mat-tree-node>
            <mat-nested-tree-node *matTreeNodeDef="let node; when: hasChild">
                <li>
                    <div class="mat-tree-node" matTreeNodeToggle>
                        <button mat-icon-button
                                [attr.aria-label]="'Toggle ' + node.name">
                        <mat-icon class="mat-icon-rtl-mirror">
                            {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
                        </mat-icon>
                        </button>
                        {{node.name}}
                    </div>
                    <ul [class.tree-invisible]="!treeControl.isExpanded(node)">
                        <ng-container matTreeNodeOutlet></ng-container>
                    </ul>
                </li>
            </mat-nested-tree-node>
        </mat-tree>
        <!-- <mat-selection-list  dense [multiple]="false" #selector>
            <ng-container *ngFor="let group of docGroups; let i = index; trackBy: trackByFn">
                <div mat-subheader>{{group.name}}</div>
                <mat-list-option *ngFor="let doc of group.docs; let i = index; trackBy: trackByFn" (click)="groupSelect(doc, group.name)">
                    {{doc.group ? doc.group.toUpperCase() : 'RES'}} {{doc.year ? (doc.type + ' ' + doc.year.toString()) : doc.type.replace('_',' ')}}
                </mat-list-option>
                <mat-divider></mat-divider>
            </ng-container>
        </mat-selection-list> -->
    `
})

export class FileListControlComponent {
    @Input() docGroups: Array<DocGroup> = [];
    @Input() selectedGroup: DocGroup;
    @Output() readonly groupChange: EventEmitter<DocGroup> = new EventEmitter<DocGroup>();
    isLoadingResults = false;
    @ViewChild(MatInput, { static: true }) input: MatInput;
    treeControl = new NestedTreeControl<DocGroup>(node => node.docs);
    dataSource = new MatTreeNestedDataSource<DocGroup>();
    constructor() {
      this.dataSource.data = this.docGroups;
    }
    hasChild = (_: number, node: DocGroup) => !!node.docs && node.docs.length > 0;
    trackByFn(index: number, el: any): string {
        return `item_${index}`;
    }
    groupSelect(group: DocGroup): void {
        if (group !== this.selectedGroup) { this.selectedGroup = group; }
        this.groupChange.emit(group);
    }
}
