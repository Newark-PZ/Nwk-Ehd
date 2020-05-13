import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const routeAnimation = trigger('routeAnimation', [
  transition('void => *', [style({ opacity: 0 }), animate('400ms 150ms ease-in-out', style({ opacity: 1 }))])
]);
export const sideToggle = trigger('sideToggle', [
state('open', style({
    width: '20rem'
})),
state('closed', style({
    width: '3rem'
})),
transition('open <=> closed', [
    animate('300ms 150ms ease-in-out')
])
]);
export const contentToggle = trigger('contentToggle', [
state('open', style({
    'margin-left': '20rem'
})),
state('closed', style({
    'margin-left': '3rem'
})),
transition('open <=> closed', [
    animate('300ms 150ms ease-in-out')
])
]);
export const sidebarButtonStateTrigger: AnimationTriggerMetadata = trigger(
  'sidebarButtonState',
  [
      state(
          'opened',
          style({
              transform: 'rotate(0deg)'
          })
      ),
      state(
          'closed',
          style({
              transform: 'rotate(180deg)'
          })
      ),
      transition('opened => closed', [animate('300ms ease-out')]),
      transition('closed => opened', [animate('300ms ease-out')])
  ]
);

export const shownStateTrigger: AnimationTriggerMetadata = trigger(
  'shownState',
  [
      transition(':enter', [
          style({
              opacity: 0
          }),
          animate(
              '200ms ease-out',
              style({
                  opacity: 1
              })
          )
      ]),
      transition(':leave', [
          animate(
              '500ms ease-out',
              style({
                  opacity: 0
              })
          )
      ])
  ]
);
export const slideshowAnimation = trigger(
    'slideInOut', [
    state('shown', style({
        display: 'flex',
        opacity: 1,
        left: 0
    })),
    state('hidden', style({
        display: 'none',
        opacity: 0,
        left: '50%'
    })),
    transition('shown => hidden', [animate('500ms ease-out')]),
    transition('hidden => shown', [animate('500ms ease-in')])
  ]
);
export const rowExpand = trigger('rowExpand', [
    state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
    state('expanded', style({ minHeight: '*' })),
    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
  ]);
