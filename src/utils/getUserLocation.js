async function getCurrentPositionAsync() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export async function getUserLocation() {
  try {
    const position = await getCurrentPositionAsync();
    return handleSuccess(position);
  } catch (error) {
    HandleError(error);
  }
}

function handleSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  return { lat, lng };
}

function HandleError() {
  return {lat:"N/A",lng:"N/A"};
}
