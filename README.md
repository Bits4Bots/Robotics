# My Robotics Kit MakeCode Extension

This MakeCode extension supports the following components in **My Robotics Kit**:

- DC Motors  
- Servos  
- Ultrasonic sensor  
- Water level sensor  
- Temperature sensor  
- Buzzers  
- LEDs  
- Latching Hall Effect Sensor  

All components are **configurable by pin** so students can wire freely.

---

## 🚀 Installation

1. Open [MakeCode for micro:bit](https://makecode.microbit.org/).  
2. Go to **Advanced → Extensions**.  
3. Paste this repo URL:  


## 📚 Lesson Ideas

Obstacle Avoider → DC motors + ultrasonic sensor

Smart Plant Pot → Water level + temperature sensor

Magnet Detector → Hall effect sensor + LED

Musical Alarm → Ultrasonic + buzzer


---

## 🧩 Blocks

### 🚗 DC Motor
```blocks
myrobotkit.setMotor(AnalogPin.P0, MotorDirection.Forward, 200)
basic.pause(1000)
myrobotkit.setMotor(AnalogPin.P0, MotorDirection.Backward, 200)


### ⚙️ Servo
```blocks
myrobotkit.setServo(AnalogPin.P1, 90)
basic.pause(1000)
myrobotkit.setServo(AnalogPin.P1, 0)

### 📏 Ultrasonic Sensor
```blocks
let dist = myrobotkit.ultrasonic(DigitalPin.P2, DigitalPin.P3)
basic.showNumber(dist)

### 💧 Water Level Sensor
```blocks
let level = myrobotkit.waterLevel(AnalogPin.P4)
basic.showNumber(level)

### 🌡️ Temperature Sensor
```blocks
let temp = myrobotkit.temperature(AnalogPin.P5)
basic.showNumber(temp)

### 🔔 Buzzer
```blocks
myrobotkit.buzzer(AnalogPin.P6, 440, 500)

### 💡 LED
```blocks
myrobotkit.led(DigitalPin.P7, true)
basic.pause(500)
myrobotkit.led(DigitalPin.P7, false)

### 🧲 Hall Effect Sensor
```blocks
if (myrobotkit.hallSensor(DigitalPin.P8)) {
    basic.showString("MAGNET")
}

### 🎮 Example Project
```blocks
basic.forever(function () {
    myrobotkit.setServo(AnalogPin.P0, 0)
    myrobotkit.setServo(AnalogPin.P1, 90)
    myrobotkit.setServo(AnalogPin.P2, 180)
    basic.pause(1000)

    myrobotkit.setServo(AnalogPin.P0, 180)
    myrobotkit.setServo(AnalogPin.P1, 90)
    myrobotkit.setServo(AnalogPin.P2, 0)
    basic.pause(1000)
})

