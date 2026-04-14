async function wait(duration:  number) {
   return await fetch("adsa")
}

wait(1000).then(value => {
    console.log(value.json())
})