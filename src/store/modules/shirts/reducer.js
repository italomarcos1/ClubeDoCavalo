import produce from 'immer';

const INITIAL_STATE = {
  tshirt: null,
  tFronts: null, // array de tshirts
  front_final: null,
};

export default function shirts(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@shirts/UPLOAD_SHIRTS': {
        draft.tshirt = action.payload.tshirt;

        draft.tFronts = action.payload.tFronts;

        break;
      }
      case '@shirts/update_color': {
        draft.tshirt.front = action.payload.tf;
        break;
      }

      case '@shirts/update_sticker': {
        draft.tshirt.front = action.payload.tf;
        break;
      }

      case '@shirts/update_tshirt_front': {
        draft.tshirt.front = action.payload.uri;
        break;
      }

      case '@shirts/set_front_shirt': {
        draft.front_final.print = action.payload.print;
        draft.front_final.id = action.payload.id;
        break;
      }

      default:
    }
  });
}
