import * as ImageIndexActions from './image-index.actions';

export interface State {
  currentIndex: number;
}

const initialState: State = {
  currentIndex: 0
};

export const imageIndexReducer = (
  state = initialState,
  action: ImageIndexActions.ImageIndexActions
) => {
  switch (action.type) {
    case ImageIndexActions.SET_IMAGE_INDEX:
      return { ...state, currentIndex: action.payload };
    case ImageIndexActions.RESET_IMAGE_INDEX:
      return { ...state, currentIndex: 0 };
    default:
      return state;
  }
};
