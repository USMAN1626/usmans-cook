export function isTimeValid(deliveryTime) {
    const now = new Date();
    const delivery = new Date(deliveryTime);
    const diff = (delivery - now) / (1000 * 60 * 60);
    return diff >= 5;
  }
  
  