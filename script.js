const clearFunc = () => {
    const fields = document.querySelectorAll(".to-clear");
    fields.forEach((field) => (field.value = ""));
}


const calculate = () => {
    const sleepGoal = parseInt(document.getElementById("sleep-goal").value) * 7
    const result = document.getElementById("result")
    const dayOfWeekArr = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

    let actual = 0

    dayOfWeekArr.forEach((i) => {
        let hours = parseInt(document.getElementById(i).value)
        console.log(hours)
        actual += hours
    })

    const res = sleepGoal - actual

    if (res > 0) {
        result.innerText = `Your sleep debt is ${res} hours`
    } else if (res === 0) {
        result.innerText = `You've met your sleep goal`
    } else if (res < 0) {
        result.innerText = `You overslept by ${res} hours`
    }
}