  let driverId = 0;
  let passengerId = 0;
  let tripId = 0;

  store = {drivers: [], passengers: [], trips: []}


class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }

  trips() {
    const that = this
    return store.trips.filter(function(trip) {return trip.driverId === that.id})
  }

  passengers() {
    return this.trips().map(trip => {return trip.passenger()})
    // return store.passengers.filter(function(passenger) {return passenger.driverId === this.id}.bind(this))
  }

}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {return trip.passengerId === this.id})
  }

  drivers() {
    return this.trips().map(trip => {return trip.driver()})
    // return store.drivers.filter(function(driver) {return driver.passengerId === this.id}.bind(this))
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    // this.driverId = driver.id;
    // this.passengerId = passenger.id;
    if (driver) {
      this.driverId = driver.id
    }
    if (passenger) {
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }
  setPassenger(passenger){
    this.passengerId = passenger.id
  }
  setDriver(driver){
    this.driverId = driver.id
  }

  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId
    })
  }

  passenger() {
    return store.passengers.find(function(passenger) {
      return passenger.id === this.passengerId
    }.bind(this)
  )}
}

// class Trip {
//   constructor(driver, passenger) {
//     this.driverId = driver.id;
//     this.passengerId = passenger.id;
//     this.id = tripId++;
//     store.trips.push(this);
//   }
//   driver() {
//     return store.drivers.find(driver => {
//       return driver.id === this.driverId;
//     });
//   }
//   passenger() {
//     return store.passengers.find(passenger => {
//       return passenger.id === this.passengerId;
//     });
//   }
// }
