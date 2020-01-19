import storage from 'redux-persist/lib/storage';
// import para usar o storage local(web/mobile)
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber',
      // quem vai poder usar esses dados
      storage,
      // storage, no caso sera o localstorage
      whitelist: ['auth', 'user'],
      // nome dos reducers que vou armazenar as configuracoes
    },
    reducers
  );

  return persistedReducer;
};
