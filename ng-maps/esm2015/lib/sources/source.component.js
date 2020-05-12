import { Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../layers/layer.component";
export class SourceComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'source';
    }
    ngOnDestroy() {
        if (this.host && this.host.instance) {
            this.host.instance.setSource(undefined);
        }
    }
    _register(s) {
        if (this.host) {
            this.host.instance.setSource(s);
        }
    }
}
SourceComponent.ɵfac = function SourceComponent_Factory(t) { return new (t || SourceComponent)(i0.ɵɵdirectiveInject(i1.LayerComponent)); };
SourceComponent.ɵdir = i0.ɵɵdefineDirective({ type: SourceComponent, inputs: { attributions: "attributions" } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1hcHMvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy9zb3VyY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7OztBQUtqRCxNQUFNLE9BQWdCLGVBQWU7SUFNbkMsWUFBc0IsSUFBb0I7UUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFKMUMsa0JBQWEsR0FBRyxRQUFRLENBQUM7SUFJb0IsQ0FBQztJQUU5QyxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFUyxTQUFTLENBQUMsQ0FBUztRQUMzQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOzs4RUFsQm1CLGVBQWU7b0RBQWYsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvdXJjZSB9IGZyb20gJ29sL3NvdXJjZSc7XG5cbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogU291cmNlO1xuICBjb21wb25lbnRUeXBlID0gJ3NvdXJjZSc7XG5cbiAgQElucHV0KCkgYXR0cmlidXRpb25zOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGhvc3Q6IExheWVyQ29tcG9uZW50KSB7fVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmhvc3QgJiYgdGhpcy5ob3N0Lmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHVuZGVmaW5lZCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9yZWdpc3RlcihzOiBTb3VyY2UpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHMpO1xuICAgIH1cbiAgfVxufVxuIl19