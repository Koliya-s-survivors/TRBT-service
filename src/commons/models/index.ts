interface FirstModel {      // interface - соглашение 
  name: string
  lastName: string
}

class FirstModelImpl implements FirstModel {
  lastName = '';

  constructor(public name: string) {
    this.name = name
  }
  
}



export { FirstModelImpl }