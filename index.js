const doSomethingAsync = () => {
    return new Promise(resolve => {
      resolve('I did something')
    })
  }
  
  const doSomething = async () => {
    console.log(await doSomethingAsync())
  }
  
  console.log('Before')
 doSomething()
  console.log('After')

  //Output:
    //Before
    // After
    // I did something