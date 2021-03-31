run_woo = () => {
    console.log('woo')
}

range = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }

run_count = () => {
    for (let num in range(1, 5)){
        num = parseInt(num) + 1
        // console.log(num)
        console.log((num)/5)
    }
}




// run functions
run_woo()
run_count()