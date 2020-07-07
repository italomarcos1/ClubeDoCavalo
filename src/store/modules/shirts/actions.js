export function uploadShirts(tshirt, tFronts) {
  return {
    type: '@shirts/UPLOAD_SHIRTS',
    payload: {
      tshirt,
      tFronts,
    },
  };
}
