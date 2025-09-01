basic.forever(function () {
    // Servo test
    Bits4BotsRobotKit.setServo(AnalogPin.P1, 90)
    basic.pause(1000)
    Bits4BotsRobotKit.setServo(AnalogPin.P1, 0)
    basic.pause(1000)

    // Ultrasonic distance
    let dist = Bits4BotsRobotKit.ultrasonic(DigitalPin.P2, DigitalPin.P3)
    basic.showNumber(dist)

    // Hall effect + LED
    if (Bits4BotsRobotKit.hallSensor(DigitalPin.P4)) {
        Bits4BotsRobotKit.led(DigitalPin.P5, true)
    } else {
        Bits4BotsRobotKit.led(DigitalPin.P5, false)
    }

    // Buzzer
    Bits4BotsRobotKit.buzzer(AnalogPin.P6, 440, 200)
})
