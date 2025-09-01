basic.forever(function () {
    // Servo test
    myrobotkit.setServo(AnalogPin.P1, 90)
    basic.pause(500)
    myrobotkit.setServo(AnalogPin.P1, 0)
    basic.pause(500)

    // Ultrasonic distance
    let dist = myrobotkit.ultrasonic(DigitalPin.P2, DigitalPin.P3)
    basic.showNumber(dist)

    // Hall effect + LED
    if (myrobotkit.hallSensor(DigitalPin.P4)) {
        myrobotkit.led(DigitalPin.P5, true)
    } else {
        myrobotkit.led(DigitalPin.P5, false)
    }

    // Buzzer
    myrobotkit.buzzer(AnalogPin.P6, 440, 200)
})
