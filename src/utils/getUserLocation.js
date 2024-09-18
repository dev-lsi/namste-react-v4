async function getCurrentPositionAsync() {
  
  if(navigator.geolocation.getCurrentPosition){
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }else return document.getElementById("root").innerHTML="Not n.g"  
  
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
  return null;
}
