import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Feature } from 'ol';
import { SourceVectorComponent } from './sources/vector.component';

@Component({
  selector: 'map-feature',
  template: ' <ng-content></ng-content>'
})
export class FeatureComponent implements OnInit, OnDestroy, OnChanges {
  componentType = 'feature';
  instance: Feature;

  @Input() id: string | number | undefined;

  constructor(private readonly host: SourceVectorComponent) {}

  ngOnInit(): void {
    this.instance = new Feature();
    if (this.id !== undefined) {
      this.instance.setId(this.id);
    }
    this.host.instance.addFeature(this.instance);
  }

  ngOnDestroy(): void {
    this.host.instance.removeFeature(this.instance);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.instance) {
      this.instance.setId(this.id);
    }
  }
}
