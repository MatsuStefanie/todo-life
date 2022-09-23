import { trigger, state, style, transition, animate, AnimationMetadata, keyframes } from '@angular/animations';
import { environment } from 'src/environments/environment';


export const fade =
  (animationInMs?: string | number): AnimationMetadata => {
    return trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition((':enter' || ':leave'),
        [animate(animationInMs || (environment.animationMs * 2))])
    ]);
  }

export const expandCollapse =
  (animationInMs?: string | number): AnimationMetadata => {
    return trigger("expandCollapse", [
      state('collapse', style({
        height: 0,
        opacity: 0
      })),
      state('expand', style({
        opacity: 1
      })),
      transition('expand <=> collapse',
        animate(animationInMs || environment.animationMs))
    ]);
  };

export const subtileHover =
  (animationInMs?: string | number): AnimationMetadata => {
    return trigger('subtileHover', [
      state('hover', style({
        backgroundColor: '#c6c3ec',
        opacity: 0.87

      })),
      state('leave', style({
        backgroundColor: 'transparent',

      })),
      transition('hover <=> leave',
        animate(animationInMs || environment.animationMs))
    ]);
  };

export const expand = (animationInMs?: string | number): AnimationMetadata => {
  return trigger('expand', [
    state('up', style({
      height: '25vw',
      width: '30vw',
    }))
    ,
    state('down', style({
    })),
    transition('down <=> up',
      animate(animationInMs || environment.animationMs)
    )
  ])
};
