import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers({
  counter,
});

// 루트 리듀서를 내보내기
export default rootReducer;

// 루트 리듀서의 반환값을 유추
export type RootState = ReturnType<typeof rootReducer>;
