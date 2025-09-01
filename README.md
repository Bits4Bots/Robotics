# Bits4Bots Robotics Kit MakeCode Extension

This MakeCode extension supports the following components in **Bits4Bots Robotics Kit**:

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
Bits4BotsRobotKit.setMotor(AnalogPin.P0, MotorDirection.Forward, 200)
basic.pause(1000)
Bits4BotsRobotKit.setMotor(AnalogPin.P0, MotorDirection.Backward, 200)


### ⚙️ Servo
```blocks
Bits4BotsRobotKit.setServo(AnalogPin.P1, 90)
basic.pause(1000)
Bits4BotsRobotKit.setServo(AnalogPin.P1, 0)

### 📏 Ultrasonic Sensor
```blocks
let dist = Bits4BotsRobotKit.ultrasonic(DigitalPin.P2, DigitalPin.P3)
basic.showNumber(dist)

### 💧 Water Level Sensor
```blocks
let level = Bits4BotsRobotKit.waterLevel(AnalogPin.P4)
basic.showNumber(level)

### 🌡️ Temperature Sensor
```blocks
let temp = Bits4BotsRobotKit.temperature(AnalogPin.P5)
basic.showNumber(temp)

### 🔔 Buzzer
```blocks
Bits4BotsRobotKit.buzzer(AnalogPin.P6, 440, 500)

### 💡 LED
```blocks
Bits4BotsRobotKit.led(DigitalPin.P7, true)
basic.pause(500)
Bits4BotsRobotKit.led(DigitalPin.P7, false)

### 🧲 Hall Effect Sensor
```blocks
if (Bits4BotsRobotKit.hallSensor(DigitalPin.P8)) {
    basic.showString("MAGNET")
}

### 🎮 Example Project
```blocks
basic.forever(function () {
    Bits4BotsRobotKit.setServo(AnalogPin.P0, 0)
    Bits4BotsRobotKit.setServo(AnalogPin.P1, 90)
    Bits4BotsRobotKit.setServo(AnalogPin.P2, 180)
    basic.pause(1000)

    Bits4BotsRobotKit.setServo(AnalogPin.P0, 180)
    Bits4BotsRobotKit.setServo(AnalogPin.P1, 90)
    Bits4BotsRobotKit.setServo(AnalogPin.P2, 0)
    basic.pause(1000)
})

