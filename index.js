const scuberHq= 42;
function distanceFromHqInBlocks(pickupLocation)
{
 return Math.abs(pickupLocation-scuberHq);}
function distanceFromHqInFeet(pickupLocation){
    const feetPerBlock=264;
    const distanceInBlocks= Math.abs(pickupLocation-scuberHq);
    const  distanceInFeet=distanceInBlocks*feetPerBlock;
    return distanceInFeet;
}

const feetPerBlock = 264;

function distanceTravelledInFeet(startBlock, endBlock) {
  const distanceInBlocks = Math.abs(startBlock - endBlock);
  const distanceInFeet = distanceInBlocks * feetPerBlock;
  return distanceInFeet;
}

function calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);
  let price;
  if (distance <= 400) {
    price = 0;
  } else if (distance > 400 && distance <= 2000) {
    price = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    price = 25;
  } else {
    price = 'cannot travel that far';
  }
  return price;
}


