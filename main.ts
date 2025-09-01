// main.ts
// MakeCode extension for My Robotics Kit

//% color=#34ebcc1 icon="\uf544" block="myRobotKit"
namespace myrobotkit {

    // ----------------- DC MOTOR -----------------
    export enum MotorDirection {
        //% block="forward"
        Forward = 0,
        //% block="backward"
        Backward = 1
    }

    //% blockId=myrobot_setMotor
    //% block="set motor at pin %pin | direction %dir | speed %speed"
    //% speed.min=0 speed.max=255
    export function setMotor(pin: AnalogPin, dir: MotorDirection, speed: number): void {
        if (dir == MotorDirection.Forward) {
            pins.analogWritePin(pin, speed)
        } else {
            pins.analogWritePin(pin, 1023 - speed)
        }
    }

    // ----------------- SERVO -----------------
    //% blockId=myrobot_setServo
    //% block="set servo at pin %pin | to %angle °"
    //% angle.min=0 angle.max=180
    export function setServo(pin: AnalogPin, angle: number): void {
        pins.servoWritePin(pin, angle)
    }

    // ----------------- ULTRASONIC -----------------
    //% blockId=myrobot_ultrasonic
    //% block="ultrasonic trig %trig | echo %echo (cm)"
    export function ultrasonic(trig: DigitalPin, echo: DigitalPin): number {
        pins.setPull(trig, PinPullMode.PullNone)
        pins.digitalWritePin(trig, 0)
        control.waitMicros(2)
        pins.digitalWritePin(trig, 1)
        control.waitMicros(10)
        pins.digitalWritePin(trig, 0)
        let d = pins.pulseIn(echo, PulseValue.High, 25000)
        return Math.idiv(d, 58)
    }

    // ----------------- WATER LEVEL -----------------
    //% blockId=myrobot_waterLevel
    //% block="water level sensor at pin %pin"
    export function waterLevel(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
    }

    // ----------------- TEMPERATURE -----------------
    //% blockId=myrobot_temperature
    //% block="temperature sensor at pin %pin (°C)"
    export function temperature(pin: AnalogPin): number {
        let v = pins.analogReadPin(pin) * 3.3 / 1023
        return Math.round((v - 0.5) * 100)
    }

    // ----------------- BUZZER -----------------
    //% blockId=myrobot_buzzer
    //% block="buzzer at pin %pin | freq %freq Hz | for %ms ms"
    export function buzzer(pin: AnalogPin, freq: number, ms: number): void {
        pins.analogSetPitchPin(pin)
        music.playTone(freq, ms)
    }

    // ----------------- LED -----------------
    //% blockId=myrobot_led
    //% block="set LED at pin %pin | %on"
    export function led(pin: DigitalPin, on: boolean): void {
        pins.digitalWritePin(pin, on ? 1 : 0)
    }

    // ----------------- HALL EFFECT SENSOR -----------------
    //% blockId=myrobot_hallSensor
    //% block="hall effect sensor at pin %pin"
    export function hallSensor(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1
    }
}



