basic.forever(function () {
    for (let J = 0; J <= 4; J++) {
        if (J == 0) {
            led.plot(2, 2)
        } else {
            led.plot(2, 2 + J)
            led.plot(2, 2 - J)
            led.plot(2 - J, 2)
            led.plot(2 + J, 2)
        }
        basic.pause(1000)
    }
})
