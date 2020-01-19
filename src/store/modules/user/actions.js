export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
    // recebo meu estado atualizado pelo REDUX
  };
}

export function updateProfileFaliure() {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
  };
}
