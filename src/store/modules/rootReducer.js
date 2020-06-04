import { combineReducers } from 'redux';

import auth from '~/store/modules/auth/reducer';
import user from '~/store/modules/user/reducer';
import shirts from '~/store/modules/shirts/reducer';
import shoppingbag from '~/store/modules/shoppingbag/reducer';

export default combineReducers({ auth, user, shirts, shoppingbag });
